const express = require('express');
const verifyAccount = require('../middlewares/verifyAccount');

const router = express.Router();

router.post('/', verifyAccount);

module.exports = router;