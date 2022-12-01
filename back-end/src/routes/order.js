const express = require('express');
const orderController = require('../controller/order.controller');
const authMiddleware = require('../middlewares/authMiddleware');
const orderMiddleware = require('../middlewares/orderMiddleware');

const router = express.Router();

router.post('/', authMiddleware, orderMiddleware, orderController.createOrder);

module.exports = router;