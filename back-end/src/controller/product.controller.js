const productsService = require('../services/productsService');

const productController = {
    getAll: async (_req, res, _next) => {
        const products = await productsService.getAll();
        return res.status(200).json(products);
    }
}

module.exports = productController;