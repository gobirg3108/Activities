const Student = require('../models/student');
const Mentor = require('../models/mentor');

exports.createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getUnassignedStudents = async (req, res) => {
  try {
    const students = await Student.find({ mentor: null });
    res.send(students);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.assignMentor = async (req, res) => {
  try {
    const { studentId, mentorId } = req.body;
    const student = await Student.findById(studentId);
    const mentor = await Mentor.findById(mentorId);

    if (!student || !mentor) {
      return res.status(404).send('Student or Mentor not found');
    }

    student.mentor = mentorId;
    student.previousMentors.push(mentorId);
    await student.save();

    mentor.students.push(studentId);
    await mentor.save();

    res.send(student);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getPreviousMentors = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate('previousMentors');
    if (!student) {
      return res.status(404).send('Student not found');
    }
    res.send(student.previousMentors);
  } catch (error) {
    res.status(400).send(error);
  }
};
