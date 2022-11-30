const express = require('express');
const userController = require('../controller/user.controller');
const verifyCredentials = require('../middlewares/verifyCredentials');

const router = express.Router();

router.post('/', verifyCredentials, userController.signUp);

module.exports = router;
