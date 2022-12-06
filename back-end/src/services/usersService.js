const { User } = require('../database/models');
const errorGenerate = require('../utils/errorGenerate');

const usersService = {
  create: async ({ name, email, cryptoPassword }) => {
    await User.create({
      name,
      email,
      password: cryptoPassword,
      role: 'customer',
    });
  },

  getAllSeller: async () => {
    const users = await User.findAll(
    {
      where: { role: 'seller' },
    },
    {
      attributes: ['id', 'name', 'email', 'role'],
    },
  );

    return users;
  },

  findByEmail: async (email) => {
    const user = await User.findOne({ where: { email } });

    return user;
  },

  getById: async (id) => {
    const user = await User.findByPk(id, {
      attributes: ['id', 'name', 'email', 'role'],
    });

    if (user === null) throw errorGenerate('User does not exist', 404);
    return user;
  },

  delete: async (id) => User.destroy({ where: { id } }),
};

module.exports = usersService;
