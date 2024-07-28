const nodemailer = require('nodemailer');
const Token = require('../models/Token');
const { v4: uuidv4 } = require('uuid');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };

  return transporter.sendMail(mailOptions);
};

exports.generateToken = async (userId) => {
  const token = new Token({ userId, token: uuidv4() });
  await token.save();
  return token.token;
};
