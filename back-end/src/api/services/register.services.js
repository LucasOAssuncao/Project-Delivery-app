const errorGenerate = require("../../utils/errorGenerate");
const { User } = require('../../database/models/User')

const registerService = {
    create: async ({ name, email, password, role }) => {
        const userExist = await User.findOne({ where: { email } });
    
        if (userExist !== null) throw errorGenerate('User already registered', 409);
    
        const user = await User.create(
           { name, email, password, image },
        );
    
        const token = generateToken(user.dataValues);
        return { token };
    },

    getAll: async () => {
        const users = await User.findAll({ 
            attributes: ['id', 'name', 'email', 'role'],
        });
        return users;
    },

    getById: async (id) => {
        const user = await User.findByPk(id, {
            attributes: ['id', 'name', 'email', 'role'],
        });
        
    if (user === null) throw errorGenerate('User does not exist', 404);
    return user;
    },

    delete: async (id) => User.destroy({ where: { id } })
}
 module.exports = registerService;