const Student = require('../models/student.model');

// Controller methods
exports.createStudent = async (req, res) => {
  try {
    const { name, email, mentorId } = req.body;
    const newStudent = new Student({ name, email, mentor: mentorId });
    const student = await newStudent.save();
    res.json(student);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getStudentsByMentor = async (req, res) => {
  try {
    const { mentorId } = req.params;
    const students = await Student.find({ mentor: mentorId });
    res.json(students);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Add more methods as needed (update, delete, etc.)
