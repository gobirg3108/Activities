const Mentor = require("../models/mentor.model");
const Student = require("../models/student.model");

// Create a new mentor
exports.createMentor = async (req, res) => {
  try {
    const mentor = new Mentor(req.body);
    await mentor.save();
    res.status(201).json(mentor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all students for a particular mentor
exports.getStudentsByMentor = async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.id).populate("students");
    if (!mentor) {
      return res.status(404).json({ error: "Mentor not found" });
    }
    res.json(mentor.students);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Assign multiple students to a mentor
exports.assignStudentsToMentor = async (req, res) => {
  try {
    const { mentorId, studentIds } = req.body;
    const mentor = await Mentor.findById(mentorId);
    if (!mentor) {
      return res.status(404).json({ error: "Mentor not found" });
    }

    const students = await Student.find({ _id: { $in: studentIds } });
    students.forEach((student) => {
      if (student.mentor) {
        return res
          .status(400)
          .json({ error: `Student ${student.name} already has a mentor` });
      }
      student.mentor = mentorId;
      student.save();
    });

    mentor.students.push(...studentIds);
    await mentor.save();

    res.json(mentor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
