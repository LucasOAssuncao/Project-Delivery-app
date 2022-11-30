const bcrypt = require('bcrypt');
const usersService = require('../services/usersService');

const userController = {
  signUp: async (req, res) => {
    const { name, email, password } = req.body;
    const cryptPassword = bcrypt.hashSync(
      password,
      bcrypt.genSaltSync(12),
      null,
    );

    await usersService.create({ name, email, cryptPassword });

    res.status(200).json({ message: 'User created!' });
  },
};

module.exports = userController;
