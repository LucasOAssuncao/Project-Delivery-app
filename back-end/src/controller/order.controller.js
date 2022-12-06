const saleService = require('../services/saleService');
const productService = require('../services/productsService');
const saleProductsService = require('../services/salesProductsService');

const orderController = {
    createOrder: async (req, res, _next) => {
        const { sellerId, totalPrice, address, products } = req.body;
        const { id } = req.user;

        await saleService
          .create({ userId: id, sellerId, totalPrice, address, products });

        return res.status(200).json({ message: 'Order created!' });
    },

    getDetailedOrder: async (req, res, _next) => {
      const { saleId } = req.body;

      const arrOfProducts = await saleProductsService.getById(saleId);

      const products = await Promise
        .all(arrOfProducts.map((e) => productService.getById(e.productId)));

      return res.status(200).json(products);
    },
    
    getAll: async (_req, res, _next) => {
      const sales = await saleService.getAll();
      return res.status(200).json(sales);
    },

    getById: async (req, res, _next) => {
      const { id } = req.params;
      const sale = await saleService.getById(id);
      return res.status(200).json(sale);
    },
};

module.exports = orderController;