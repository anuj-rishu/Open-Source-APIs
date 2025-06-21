const express = require('express');
const router = express.Router();
const pincodeController = require('../controllers/pincodeController');

router.get('/pincode/:pincode', pincodeController.getByPincode);
router.get('/state/:state', pincodeController.getByState);
router.get('/district/:district', pincodeController.getByDistrict);

module.exports = router;