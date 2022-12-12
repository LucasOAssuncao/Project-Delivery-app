const authenticateToken = require('../utils/authenticateToken');

const authMiddleware = async (req, res, next) => {
    const { authorization } = req.headers;
    console.log('TOKEN', authorization);

    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    const userAuth = authenticateToken(authorization);

    if (!userAuth) return res.status(401).json({ message: 'Expired or invalid token' });

    req.user = userAuth;
    next();
};

module.exports = authMiddleware;