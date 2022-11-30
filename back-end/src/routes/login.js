const express = require('express');
const verifyAccount = require('../middlewares/verifyAccount');

const router = express.Router();

router.post('/login', verifyAccount);

module.exports = router;