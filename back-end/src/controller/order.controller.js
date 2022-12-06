const saleService = require('../services/saleService');

const orderController = {
    createOrder: async (req, res, _next) => {
        const { sellerId, totalPrice, address, products } = req.body;
        const { id } = req.user;
        console.log('AAAAAAAAAAAAAAAAAAAA', id);

        await saleService
          .create({ userId: id, sellerId, totalPrice, address, products });

        return res.status(200).json({ message: 'Order created!' });
    },

    getAll: async (_req, res, _next) => {
      const sales = await saleService.getAll();
      return res.status(200).json(sales);
    },

    getById: async (req, res, _next) => {
      const { id } = req.params;
      const sale = await saleService.getById(id);
      return res.status(200).json(sale);
    }
};

module.exports = orderController;