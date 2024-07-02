const Student = require("../models/student.model");
const Mentor = require("../models/mentor.model");

// Create a new student
exports.createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Assign or change mentor for a student
exports.assignOrChangeMentor = async (req, res) => {
  try {
    const { studentId, mentorId } = req.body;
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    const mentor = await Mentor.findById(mentorId);
    if (!mentor) {
      return res.status(404).json({ error: "Mentor not found" });
    }

    student.mentor = mentorId;
    await student.save();

    res.json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Show the previously assigned mentor for a particular student
exports.getPreviousMentors = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate("mentor");
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.json(student.mentor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
