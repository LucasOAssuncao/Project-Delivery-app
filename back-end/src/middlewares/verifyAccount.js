const jwt = require('jsonwebtoken');
const fs = require('fs');
const createToken = require('../utils/createToken');
const usersService = require('../services/usersService');
const md5 = require('md5');
require('dotenv/config');

const secret = fs.readFileSync('jwt.evaluation.key', 'utf-8');

const verifyAccount = async (req, res) => {
  const { email, password } = req.body;

  const user = await usersService.findByEmail(email);

  if (!user) {
    return res.status(404).json({ message: 'User Not Found' });
  }

  const crypted = md5(password)

  if (crypted !== user.password) {
    return res.status(400).json({ message: 'Wrong Password' });
  }

  const { id, name, role } = user;
  console.log(id, name);

  const token = createToken({ email, id, name, role });
  res.status(200).json({ token, role });
};

module.exports = verifyAccount;
