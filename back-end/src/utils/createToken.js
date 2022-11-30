const { sign } = require('jsonwebtoken');

const createToken = (payload) => {
  const token = sign(payload , "secret_key", { expiresIn: '10d' });
  return token;
};

module.exports = createToken;