const saleService = require('../services/saleService');
const productService = require('../services/productsService');
const saleProductsService = require('../services/salesProductsService');
const userService = require('../services/usersService');

const orderController = {
  createOrder: async (req, res, _next) => {
    const { sellerId, totalPrice, address, products } = req.body;
    const { id } = req.user;

    const { id: saleId } = await saleService.create({
      userId: id,
      sellerId,
      totalPrice,
      address,
      products,
    });

    return res.status(201).json({ message: 'Order created!', saleId });
  },

  getDetailedOrder: async (req, res, _next) => {
    const { id } = req.params;

    const arrOfProducts = await saleProductsService.getById(id);

    const products = await Promise
      .all(arrOfProducts.map((e) => productService.getById(e.productId)));

    return res.status(200).json(products);
  },

  getAll: async (_req, res, _next) => {
    const sales = await saleService.getAll();
    return res.status(200).json(sales);
  },

  getById: async (req, res, _next) => {
    try {
      const { id } = req.params;
      const sale = await saleService.getById(id);
      
      const seller = await userService.getById(sale.sellerId);
      return res.status(200).json({ sale, seller });
    } catch (err) {
      res.status(500).json({ message: 'Pedido não existe' });
    }
  },

  getByIdUser: async (req, res, _next) => {
    const { id } = req.params;
    const sale = await saleService.getByIdUser(id);
    return res.status(200).json(sale);
  },

  editStatusSale: async (req, res) => {
    try {
      const { status } = req.body;
      const { id } = req.params;
      const sale = await saleService.editStatusSale(status, id);

      if (sale === undefined) {
        return res.status(401).json({ message: 'Atualização não autorizada' });
      }

      return res.status(200).json(sale);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao tentar realizar operação' });
    }
  },
};

module.exports = orderController;
