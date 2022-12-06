const express = require('express');
const userController = require('../controller/user.controller');
const authMiddleware = require('../middlewares/authMiddleware');
const verifyAccount = require('../middlewares/verifyAccount');

const router = express.Router();

router.post('/', verifyAccount);
router.get('/', authMiddleware, userController.getUser);

module.exports = router;