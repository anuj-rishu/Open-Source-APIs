const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pincodeRoutes = require("./routes/pincodeRoutes");
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

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

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 9000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

<<<<<<< HEAD:Indian-Cities-Pincode-Api/Server.js
=======

>>>>>>> 54aa60a21c96090477e75f288a13b4c927879b70:Indian-Cities-Pincode-Api/server.js
module.exports = app;
