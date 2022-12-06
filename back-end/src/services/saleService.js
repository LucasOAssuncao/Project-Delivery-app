const Sequelize = require('sequelize');
const { Sale, SaleProduct } = require('../database/models');
const config = require('../database/config/config');
const { getById } = require('./productsService');
const errorGenerate = require('../utils/errorGenerate');

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
      });
      const { id: saleId } = sale;

      await products.map(async ({ productId, quantity }) => {
        await SaleProduct.create({ saleId, productId, quantity });
      });

      await t.commit();
      return sale;
    } catch (error) {
      await t.rollback();
      throw error;
    }
  },

  getAll: async () => {
    const sales = await Sale.findAll({});
    return sales;
  },

  getById: async (id) => {
    const sale = await Sale.findOne({ where: { id } });
    {
    }
    if (sale === null) throw errorGenerate('Sales does not exist', 404);
    return sale;
  },

  editStatusSale: async (status , id ) => {
    const sale = await Sale.findOne({ where: { id: id } });

    if (!sale) return undefined;
  
    const newSale = await sale.update({ status });

    return newSale;
  },
};

module.exports = saleService;
