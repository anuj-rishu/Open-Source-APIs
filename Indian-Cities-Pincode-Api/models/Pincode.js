const mongoose = require('mongoose');

const PincodeSchema = new mongoose.Schema({
  pincode: { type: String, index: true },
  state:   { type: String, index: true },
  district:{ type: String, index: true }
});

module.exports = mongoose.model('Pincode', PincodeSchema);