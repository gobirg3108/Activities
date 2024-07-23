const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/User');

module.exports = function(req, res, next) {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token.split(' ')[1], config.secretOrKey);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).json('Invalid token.');
  }
};
