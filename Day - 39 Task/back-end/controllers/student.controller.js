// student.controller.js

const Student = require('../models/student.model');

// Create Student
exports.createStudent = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newStudent = new Student({ name, email });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
