const Sequelize = require('sequelize');
const { Sale, SaleProduct } = require('../database/models');
const config = require('../database/config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const saleService = {
  create: async ({ userId, sellerId, totalPrice, address, products }) => {
    const t = await sequelize.transaction();
    try {
      const { st, nb } = address;
      const sale = await Sale.create({
        userId,
        sellerId,
        totalPrice,
        deliveryAddress: st,
        deliveryNumber: nb,
        status: 'Pendente',
      }); const { id: saleId } = sale;

      await products.map(async ({ productId, quantity }) => {
        await SaleProduct.create({ saleId, productId, quantity });
      });

      await t.commit(); return sale;
    } catch (error) {
      await t.rollback(); throw error;
    }
  },
};

module.exports = saleService;
