const Course = require("../models/Course");
const courses = require("../utils/seedData");

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching courses", error: error.message });
  }
};

exports.getCourseByName = async (req, res) => {
  try {
    const course = await Course.findOne({ name: req.params.name });
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching course", error: error.message });
  }
};

exports.createCourse = async (req, res) => {
  try {
    const newCourse = new Course({ name: req.body.name });
    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating course", error: error.message });
  }
};

exports.seedDatabase = async (req, res) => {
  try {
    await Course.deleteMany({});

    const seedCourses = await Course.insertMany(
      courses.map((name) => ({ name }))
    );

    res.status(201).json({
      message: "Database seeded successfully",
      count: seedCourses.length,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error seeding database", error: error.message });
  }
};
