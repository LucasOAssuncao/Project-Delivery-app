const express = require('express');
const userController = require('../controller/user.controller');
const verifyCredentials = require('../middlewares/verifyCredentials');
const verifyUser = require('../middlewares/verifyUser');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', userController.getAllUsers);
router.post('/', verifyCredentials, verifyUser, userController.signUp);

module.exports = router;
