const authenticateToken = require('../utils/authenticateToken');
const errorGenerate = require('../utils/errorGenerate');

const authMiddleware = async (req, res, next) => {
    const authorization = req.header('Authorization');
    console.log('authori', authorization)

    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    const userAuth = await authenticateToken(authorization);
    console.log('user', userAuth)

    if (!userAuth) return next(errorGenerate('Expired or invalid token', 401));

    req.user = userAuth;
    next();
};

module.exports = authMiddleware;