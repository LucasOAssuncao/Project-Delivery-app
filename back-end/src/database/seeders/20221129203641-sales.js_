module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales',
      [{
        id: 1,
        user_id: 2,
        seller_id: 3,
        total_price: 100.50,
        delivery_address: 'Rua Zé das Flores',
        delivery_number: '90',
        sale_date: new Date('2022-12-01T19:58:00.000Z'),
        status: 'Entregue'
      },
      {
        id: 2,
        user_id: 2,
        seller_id: 3,
        total_price: 120.50,
        delivery_address: 'Rua Zé das Flores',
        delivery_number: '90',
        sale_date: new Date('2022-12-01T19:58:00.000Z'),
        status: 'Em Trânsito'
      },
      {
        id: 3,
        user_id: 2,
        seller_id: 3,
        total_price: 180.50,
        delivery_address: 'Rua Zé das Flores',
        delivery_number: '90',
        sale_date: new Date('2022-12-01T19:58:00.000Z'),
        status: 'Pendente'
      },
      {
        id: 4,
        user_id: 2,
        seller_id: 3,
        total_price: 160.50,
        delivery_address: 'Rua Zé das Flores',
        delivery_number: '90',
        sale_date: new Date('2022-12-01T19:58:00.000Z'),
        status: 'Preparando'
      },
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
};