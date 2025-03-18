const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const museumRoutes = require("./routes/museumRoutes");
const seedDatabase = require("./seed/seedDb");

const app = express();
app.use(express.json());
app.use(cors());

const startServer = async () => {
  try {
    await connectDB();
    console.log("MongoDB Connected Successfully");

    await seedDatabase();

    app.use("/museums", museumRoutes);

    app.listen(9000, () => {
      console.log("Server running on port 9000");
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();
