const express = require("express");
const connectDB = require("./config/database");
const courseRoutes = require("./routes/courseRoutes");
const Course = require("./models/Course");
const seedCourses = require("./utils/seedData");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/courses/btech", courseRoutes);

const startServer = async () => {
  try {
    await connectDB();

    const courseCount = await Course.countDocuments();
    if (courseCount === 0) {
      await Course.insertMany(seedCourses.map((name) => ({ name })));
      console.log("Database seeded automatically");
    }

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup error:", error);
  }
};

startServer();
