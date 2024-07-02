// utils/validation.js

const { check, validationResult } = require('express-validator');

exports.validateEmail = check('email').isEmail().custom(async (value) => {
  const mentorExists = await Mentor.findOne({ email: value });
  if (mentorExists) {
    return Promise.reject('Email already in use');
  }
});

exports.validateStudentEmail = check('email').isEmail().custom(async (value) => {
  const studentExists = await Student.findOne({ email: value });
  if (studentExists) {
    return Promise.reject('Email already in use');
  }
});

// In controller:
const { validationResult } = require('express-validator');
const { validateEmail } = require('../utils/validation');

exports.createMentor = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Continue with createMentor logic
};
