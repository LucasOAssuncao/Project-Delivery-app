const express = require('express');
const productController = require('../controller/product.controller');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', productController.getAll);

module.exports = router;