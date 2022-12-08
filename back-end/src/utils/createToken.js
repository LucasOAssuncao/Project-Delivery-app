const { sign } = require('jsonwebtoken');
const fs = require('fs');

const secret = fs.readFileSync('jwt.evaluation.key', 'utf-8');

const createToken = (payload) => {
  const token = sign(payload, secret, { expiresIn: '10d', algorithm: 'HS256' });
  return token;
};

module.exports = createToken;
