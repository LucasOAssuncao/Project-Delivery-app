const productsService = require('../services/productsService');

const productController = {
    getAll: async (req, res, _next) => {
        const products = await productsService.getAll();
        console.log(products);
        return res.status(200).json(products);
    }
}

module.exports = productController;