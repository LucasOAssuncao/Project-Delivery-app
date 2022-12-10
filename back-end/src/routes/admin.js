const express = require('express');
const userController = require('../controller/user.controller');
const authMiddleware = require('../middlewares/authMiddleware');
const verifyCredentials = require('../middlewares/verifyCredentials');
const verifyRole = require('../middlewares/verifyRole');
const verifyUser = require('../middlewares/verifyUser');

const router = express.Router();

router.post('/register', authMiddleware, verifyRole, verifyCredentials, verifyUser, userController.signUp)
router.get('/', authMiddleware, userController.getAllUsers);

module.exports = router;