const { SaleProduct } = require('../database/models');
const errorGenerate = require('../utils/errorGenerate');

const salesProductsService = {
  getById: async (saleId) => {
    const info = await SaleProduct.findAll({ where: { saleId } });

        if (info === null) throw errorGenerate('Sale does not exist', 404);
        return info;
  },
};

module.exports = salesProductsService;
