const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/mentor.controller');

// POST /api/mentors/:mentorId/students/:studentId/assign
router.post('/:mentorId/students/:studentId/assign', mentorController.assignStudentToMentor);

module.exports = router;
