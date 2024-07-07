const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/mentorController');

router.post('/', mentorController.createMentor);
router.post('/assign-students', mentorController.addStudentsToMentor);
router.get('/:id/students', mentorController.getStudentsByMentor);

module.exports = router;
