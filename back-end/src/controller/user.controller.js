const md5 = require('md5');
const usersService = require('../services/usersService');

const userController = {
  signUp: async (req, res) => {
    const { name, email, password, role } = req.body;
    const cryptoPassword = md5(password)

    await usersService.create({ name, email, cryptoPassword, role });

    res.status(201).json({ message: 'User created!' });
  },

  getUser: async (req, res) => {
    const { name, email, role, id } = req.user;

    res.status(201).json({ name, email, role, id });
  },

  getAllSeller: async (req, res) => {
    const sellers = await usersService.getAllSeller();

    res.status(201).json(sellers);
  },
};

module.exports = userController;
