const User = require('../models/User');
const jwt = require('jsonwebtoken');
const sendEmail = require('../utils/sendEmail');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

exports.register = async (req, res) => {
    const { username, firstName, lastName, password } = req.body;

    try {
        const user = new User({ username, firstName, lastName, password });
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        const url = `${process.env.CLIENT_URL}/activate/${token}`;
        await sendEmail(user.username, 'Account Activation', `Click this link to activate your account: ${url}`);

        res.status(201).json({ message: 'User registered, please check your email to activate your account.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.activate = async (req, res) => {
    const { token } = req.params;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (!user) return res.status(400).json({ message: 'Invalid token.' });

        user.isActive = true;
        await user.save();

        res.status(200).json({ message: 'Account activated successfully.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ message: 'User not found.' });
        if (!user.isActive) return res.status(400).json({ message: 'Account not activated.' });

        const isMatch = await user.matchPassword(password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials.' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ username: email });
        if (!user) return res.status(400).json({ message: 'User not found.' });

        const resetToken = crypto.randomBytes(32).toString('hex');
        const token = jwt.sign({ id: user._id, resetToken }, process.env.JWT_SECRET, { expiresIn: '15m' });

        const resetUrl = `${process.env.CLIENT_URL}/resetpassword/${token}`;
        await sendEmail(user.username, 'Password Reset', `Click this link to reset your password: ${resetUrl}`);

        res.status(200).json({ message: 'Password reset link sent to email.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (!user) return res.status(400).json({ message: 'Invalid token.' });

        user.password = newPassword;
        await user.save();

        res.status(200).json({ message: 'Password reset successfully.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
