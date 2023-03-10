const express = require('express');
const orderController = require('../controller/order.controller');
const authMiddleware = require('../middlewares/authMiddleware');
const orderMiddleware = require('../middlewares/orderMiddleware');

const router = express.Router();

router.post('/', authMiddleware, orderMiddleware, orderController.createOrder);
router.get('/details/:id', authMiddleware, orderController.getDetailedOrder);
router.get('/:id', authMiddleware, orderController.getById);
router.get('/user/:id', authMiddleware, orderController.getByIdUser);
router.get('/seller/:id', authMiddleware, orderController.getBySeller);
router.get('/', authMiddleware, orderController.getAll);
router.patch('/:id', authMiddleware, orderController.editStatusSale);

module.exports = router;
