const express = require('express');
const connectDB = require('./config/db');
const pincodeRoutes = require('./routes/pincodeRoutes');

const app = express();
connectDB();

app.use('/api', pincodeRoutes);

app.listen(9000, () => {
  console.log('Server running on port 9000');
});