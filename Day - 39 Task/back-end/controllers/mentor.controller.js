const Mentor = require('../models/Mentor');
const Student = require('../models/Student');

exports.assignStudentToMentor = async (req, res) => {
    try {
        const { mentorId, studentId } = req.params;

        // Fetch mentor and student from MongoDB
        const mentor = await Mentor.findById(mentorId);
        const student = await Student.findById(studentId);

        if (!mentor) {
            return res.status(404).json({ error: 'Mentor not found' });
        }

        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }

        // Example logic: Assign student to mentor
        mentor.students.push(student);
        await mentor.save();

        res.status(200).json({ message: 'Student assigned to mentor successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
