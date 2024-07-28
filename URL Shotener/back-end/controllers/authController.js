const User = require('../models/User');
const Token = require('../models/Token');
const jwt = require('jsonwebtoken');
const { sendEmail, generateToken } = require('../utils/emailService');
const bcrypt = require('bcryptjs');

// Register user
exports.register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    user = new User({ firstName, lastName, email, password });

    await user.save();

    const token = await generateToken(user._id);
    const url = `http://localhost:5000/api/auth/activate/${token}`;
    await sendEmail(user.email, 'Activate your account', `Click here to activate your account: ${url}`);

    res.status(201).json({ message: 'User registered, please check your email to activate your account' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Activate user
exports.activate = async (req, res) => {
  try {
    const token = await Token.findOne({ token: req.params.token });

    if (!token) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    const user = await User.findById(token.userId);
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    user.isActive = true;
    await user.save();
    await Token.deleteOne({ token: req.params.token });

    res.json({ message: 'Account activated' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    if (!user.isActive) {
      return res.status(400).json({ message: 'Account not activated' });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const payload = { id: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Forgot password
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const token = await generateToken(user._id);
    const url = `http://localhost:5000/api/auth/reset-password/${token}`;
    await sendEmail(user.email, 'Reset your password', `Click here to reset your password: ${url}`);

    res.json({ message: 'Password reset link sent' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Reset password
exports.resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;
  
    try {
      const passwordResetToken = await Token.findOne({ token });
  
      if (!passwordResetToken) {
        return res.status(400).json({ message: 'Invalid or expired token' });
      }
  
      const user = await User.findById(passwordResetToken.userId);
      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }
  
      user.password = await bcrypt.hash(newPassword, 10); // Hash the new password
      await user.save();
      await Token.deleteOne({ token });
  
      res.json({ message: 'Password reset successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  