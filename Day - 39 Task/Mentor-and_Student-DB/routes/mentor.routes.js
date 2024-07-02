const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/mentor.controller');

// Routes
router.post('/', mentorController.createMentor);
router.get('/', mentorController.getAllMentors);

module.exports = router;
