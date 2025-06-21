const Pincode = require("../models/Pincode");

exports.getByPincode = async (req, res) => {
  const { pincode } = req.params;
  const data = await Pincode.findOne({ pincode }, { _id: 0, __v: 0 }).lean();
  if (!data) return res.status(404).json({ error: "Pincode not found" });
  res.json(data)
};

exports.getByState = async (req, res) => {
  const { state } = req.params;
  const data = await Pincode.find(
    { state: new RegExp(state, "i") },
    { _id: 0, __v: 0 }
  ).lean();
  res.json(data);
};

exports.getByDistrict = async (req, res) => {
  const { district } = req.params;
  const data = await Pincode.find(
    { district: new RegExp(district, "i") },
    { _id: 0, __v: 0 }
  ).lean();
  res.json(data);
};
