const bcrypt = require('bcrypt');
const createToken = require('../utils/createToken');
const usersService = require('../services/usersService');

const verifyAccount = async (req, res) => {
  const { email, password } = req.body;

  const user = await usersService.findByEmail(email);

  if (!user) {
    return res.status(404).json({ message: 'User Not Found' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Wrong Password' });
  }

  const { id, name, role } = user;
  console.log(id, name);

  const token = createToken({ email, id, name, role });
  res.status(200).json({ token, role });
};

module.exports = verifyAccount;
