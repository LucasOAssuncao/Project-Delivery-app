const orderMiddleware = (req, res, next) => {
  const { sellerId, totalPrice, address, products } = req.body;

  if (!sellerId || !totalPrice || !address || !products) {
    return res.status(401).json({ message: 'All order data must be inserted.' });
  }
  next();
};

module.exports = orderMiddleware;