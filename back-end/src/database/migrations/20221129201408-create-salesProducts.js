"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const SalesProductsTable = queryInterface.createTable("salesProducts", {
      sale_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'sales',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true,
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true,
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
    return SalesProductsTable;
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable("salesProducts");
  },
};