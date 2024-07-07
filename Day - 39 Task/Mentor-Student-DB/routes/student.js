const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/', studentController.createStudent);
router.get('/unassigned', studentController.getUnassignedStudents);
router.post('/assign-mentor', studentController.assignMentor);
router.get('/:id/previous-mentors', studentController.getPreviousMentors);

module.exports = router;
