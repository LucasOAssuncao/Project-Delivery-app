const usersService = require('../services/usersService');

const verifyUser = async (req, res, next) => {
    const { email } = req.body;
    const user = await usersService.findByEmail(email);

    if (user) return res.status(409).json({ message: 'User already exists' });
  
    next();
};

module.exports = verifyUser;