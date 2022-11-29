"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const ProductsTable = queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(4,2),
      },
      url_image: {
        allowNull: false,
        type: Sequelize.STRING(200),
      },
    });
    return ProductsTable;
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable("products");
  },
};