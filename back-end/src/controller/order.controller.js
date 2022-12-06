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
};

module.exports = orderController;