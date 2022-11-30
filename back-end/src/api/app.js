const express = require('express');
const login = require('../routes/login');

const app = express();

app.use(express.json());
app.use(login);

app.get('/coffee', (_req, res) => res.status(418).end());


module.exports = app;
