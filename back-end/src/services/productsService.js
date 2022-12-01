const { Product } = require('../database/models');
const errorGenerate = require('../utils/errorGenerate');

const productsService = {
    create: async ({ name, price, image }) => {
        await Product.create({
            name, 
            price,
            image,
        });
    },

    getAll: async () => Product.findAll({
        attributes: ['id', 'name', 'price', 'image'],
    }),

    getById: async (id) => {
        const product = await Product.findByPk(id);

        if (product === null) throw errorGenerate('Product does not exist', 404);
        return product;
    },

    delete: async (id) => Product.destroy({ where: { id } }),
}

module.exports = { productsService }