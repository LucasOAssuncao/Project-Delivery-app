const md5 = require('md5');
const usersService = require('../services/usersService');
const createToken = require('../utils/createToken');

const userController = {
  signUp: async (req, res) => {
    const { name, email, password, role } = req.body;
    const cryptoPassword = md5(password);

    const { id } = await usersService.create({ name, email, cryptoPassword, role });
    const token = createToken({ email, id, name, role });

    res.status(201).json({ name, email, role, token });
  },

  getUser: async (req, res) => {
    const { name, email, role, id } = req.user;

    res.status(201).json({ name, email, role, id });
  },

  getAllUsers: async (_req, res) => {
    const users = await usersService.getAll();

    res.status(200).json(users);
  },

  getAllSeller: async (_req, res) => {
    const sellers = await usersService.getAllSeller();

    res.status(201).json(sellers);
  },

  delete: async (req, res, next) => {
    const { id } = req.params;

    try {
      const isDelete = await usersService.delete(id);
      res.status(200).json(isDelete);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = userController;
