const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.controller");

router.post("/create", studentController.createStudent);
router.post("/assign-mentor", studentController.assignOrChangeMentor);
router.get("/:id/previous-mentors", studentController.getPreviousMentors);

module.exports = router;
