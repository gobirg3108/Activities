const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const { body, validationResult } = require('express-validator');
const config = require('../config');
const User = require('../models/User');

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: config.emailUser,
    pass: config.emailPass,
  },
});

// Registration route
router.post(
  '/register',
  [
    body('email').isEmail().withMessage('Enter a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, password } = req.body;

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ email: 'Email already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        isActive: false, // Default inactive until activation
      });

      const user = await newUser.save();

      const token = crypto.randomBytes(20).toString('hex');
      user.resetPasswordToken = token;
      user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
      await user.save();

      const mailOptions = {
        to: user.email,
        from: config.emailUser,
        subject: 'Account Activation Link',
        text: `Please click on the following link, or paste this into your browser to complete the process:\n\n` +
          `http://localhost:5000/api/auth/activate/${token}\n\n` +
          `If you did not request this, please ignore this email.\n`,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json('A verification email has been sent to ' + user.email + '.');
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

// Account activation route
router.post('/activate/:token', async (req, res) => {
  try {
    const user = await User.findOne({
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json('Activation link is invalid or has expired.');
    }

    user.isActive = true;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    res.json('Your account has been activated.');
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Login route
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Enter a valid email'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ email: 'Email not found' });
      }

      if (!user.isActive) {
        return res.status(400).json('Please activate your account.');
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        const payload = { id: user.id, name: user.firstName };

        const token = jwt.sign(payload, config.secretOrKey, { expiresIn: 3600 });

        return res.json({ success: true, token: 'Bearer ' + token });
      } else {
        return res.status(400).json({ password: 'Password incorrect' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

// Forgot password route
router.post(
  '/forgot',
  [body('email').isEmail().withMessage('Enter a valid email')],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ email: 'Email not found' });
      }

      const token = crypto.randomBytes(20).toString('hex');
      user.resetPasswordToken = token;
      user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

      await user.save();

      const mailOptions = {
        to: user.email,
        from: config.emailUser,
        subject: 'Password Reset Link',
        text: `Please click on the following link, or paste this into your browser to complete the process:\n\n` +
          `http://localhost:5000/api/auth/reset/${token}\n\n` +
          `If you did not request this, please ignore this email.\n`,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json('A password reset email has been sent to ' + user.email + '.');
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

// Reset password route
router.post(
  '/reset/:token',
  [
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { password } = req.body;

    try {
      const user = await User.findOne({
        resetPasswordToken: req.params.token,
        resetPasswordExpires: { $gt: Date.now() },
      });

      if (!user) {
        return res.status(400).json('Password reset link is invalid or has expired.');
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      user.password = hashedPassword;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpires = undefined;

      await user.save();

      res.json('Your password has been updated.');
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

module.exports = router;
