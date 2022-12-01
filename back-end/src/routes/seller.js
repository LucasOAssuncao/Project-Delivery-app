const express = require('express');
const userController = require('../controller/user.controller');

const router = express.Router();

router.get('/', userController.getAllSeller);

module.exports = router;
