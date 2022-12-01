const jwt = require('jsonwebtoken');

const SECRET_TOKEN = 'secret_key'
const authenticate = (token) => {
    try {
      const validateToken = jwt.verify(token, 'secret_key');
      return validateToken;
    } catch (error) {
      return false;
    }
  }

  module.exports = authenticate;