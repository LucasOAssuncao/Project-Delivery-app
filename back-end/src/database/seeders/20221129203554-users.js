module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [{
        id: 1,
        name: 'Lewis Hamilton',
        email: 'lewishamilton@gmail.com',
        password: '1234567',
        role: 'administrator',
      },
      {
        id: 2,
        name: 'Michael Schumacher',
        email: 'MichaelSchumacher@gmail.com',
        password: '1234568',
        role: 'customer',
      },
      {
        id: 3,
        name: 'Claudim Peixoto',
        email: 'claudiopeixoto@gmail.com',
        password: '1234569',
        role: 'seller',
      },
      {
        id: 4,
        name: 'Filho do Claudim Peixoto',
        email: 'claudiopeixotofilho@gmail.com',
        password: '1234569',
        role: 'seller',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
