const express = require('express');
require('express-async-errors');
const errorMiddleware = require('../middlewares/errorMiddleware');
const { loginRouter, registerRouter } = require('../routes');

const app = express();

app.use(express.json());
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use(errorMiddleware);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
