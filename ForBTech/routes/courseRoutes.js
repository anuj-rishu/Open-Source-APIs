const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

router.get("/", courseController.getAllCourses);
router.get("/:name", courseController.getCourseByName);
router.post("/", courseController.createCourse);
router.post("/seed", courseController.seedDatabase);

module.exports = router;
