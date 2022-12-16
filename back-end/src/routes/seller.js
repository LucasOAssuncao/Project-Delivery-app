const express = require('express');
const userController = require('../controller/user.controller');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/data', authMiddleware, userController.getById);
router.get('/', userController.getAllSeller);

module.exports = router;
