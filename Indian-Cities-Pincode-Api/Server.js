const express = require('express');
const connectDB = require('./config/db');
const pincodeRoutes = require('./routes/pincodeRoutes');
require('dotenv').config();

const app = express();
connectDB();

app.use('/api', pincodeRoutes);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});