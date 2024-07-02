const Mentor = require('../models/mentor.model');

// Controller methods
exports.createMentor = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newMentor = new Mentor({ name, email });
    const mentor = await newMentor.save();
    res.json(mentor);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getAllMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.json(mentors);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Add more methods as needed (update, delete, etc.)
