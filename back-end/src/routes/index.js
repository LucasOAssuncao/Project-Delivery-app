const loginRouter = require('./login');
const registerRouter = require('./register');
const productRouter = require('./products');
const sellerRouter = require('./seller');
const orderRouter = require('./order');
const adminRouter = require('./admin');

module.exports = {
  loginRouter,
  registerRouter,
  productRouter,
  sellerRouter,
  orderRouter,
  adminRouter,
};
