const express = require("express");
const router = express.Router();
const mentorController = require("../controllers/mentor.controller");

router.post("/create", mentorController.createMentor);
router.get("/:id/students", mentorController.getStudentsByMentor);
router.post("/assign-students", mentorController.assignStudentsToMentor);

module.exports = router;
