const express = require('express');
const { checkoutInfo } = require('../controllers/checkoutController');
const router = express.Router();

router.route('/checkout').post(checkoutInfo);

module.exports = router;