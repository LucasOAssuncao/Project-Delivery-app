const md5 = require('md5');
const createToken = require('../utils/createToken');
const usersService = require('../services/usersService');
require('dotenv/config');

const verifyAccount = async (req, res) => {
  const { email, password } = req.body;

  const user = await usersService.findByEmail(email);

  if (!user) {
    return res.status(404).json({ message: 'User Not Found' });
  }

  const crypted = md5(password);

  if (crypted !== user.password) {
    return res.status(400).json({ message: 'Wrong Password' });
  }

  const { id, name, role } = user;

  const token = createToken({ email, id, name, role });
  res.status(200).json({ token, role, name, id, email });
};

module.exports = verifyAccount;
