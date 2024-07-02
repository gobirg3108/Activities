const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');

// Routes
router.post('/', studentController.createStudent);
router.get('/by-mentor/:mentorId', studentController.getStudentsByMentor);

module.exports = router;
