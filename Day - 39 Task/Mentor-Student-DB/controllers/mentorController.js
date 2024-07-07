const Mentor = require('../models/mentor');
const Student = require('../models/student');

exports.createMentor = async (req, res) => {
  try {
    const mentor = new Mentor(req.body);
    await mentor.save();
    res.status(201).send(mentor);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.addStudentsToMentor = async (req, res) => {
  try {
    const { mentorId, studentIds } = req.body;
    const mentor = await Mentor.findById(mentorId);
    if (!mentor) {
      return res.status(404).send('Mentor not found');
    }

    for (const studentId of studentIds) {
      const student = await Student.findById(studentId);
      if (student) {
        student.mentor = mentorId;
        student.previousMentors.push(mentorId);
        await student.save();
        mentor.students.push(studentId);
      }
    }
    
    await mentor.save();
    res.send(mentor);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getStudentsByMentor = async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.id).populate('students');
    if (!mentor) {
      return res.status(404).send('Mentor not found');
    }
    res.send(mentor.students);
  } catch (error) {
    res.status(400).send(error);
  }
};
