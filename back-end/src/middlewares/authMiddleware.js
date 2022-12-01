const authenticateToken = require('../utils/authenticateToken');
const errorGenerate = require('../utils/errorGenerate');

const authMiddleware = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    const userAuth = authenticateToken(authorization);

    if (!userAuth) return next(errorGenerate('Expired or invalid token', 401));

    req.user = userAuth;
    next();
};

module.exports = authMiddleware;