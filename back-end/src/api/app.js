const express = require('express');
const errorMiddleware = require('../middlewares/errorMiddleware');
const { loginRouter, registerRouter, productRouter, orderRouter } = require('../routes');

const app = express();

app.use(express.json());
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/products', productRouter);
app.use('/order', orderRouter);
app.use(errorMiddleware);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
