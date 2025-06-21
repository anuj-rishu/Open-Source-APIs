const express = require("express");
const connectDB = require("./config/db");
const pincodeRoutes = require("./routes/pincodeRoutes");
require("dotenv").config();

const app = express();

connectDB();

app.use(express.json());

app.use("/api", pincodeRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Indian Pincode API is running",
    version: "1.0.0",
    endpoints: {
      pincode: "/api/pincode/:pincode",
      state: "/api/state/:state",
      district: "/api/district/:district",
    },
  });
});

app.use("*", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT || 9000;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
