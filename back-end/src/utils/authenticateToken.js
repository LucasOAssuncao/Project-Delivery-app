const { verify } = require('jsonwebtoken');

const SECRET_TOKEN = 'secret_key'
const authenticate = async (token) => {
    try {
      const validateToken = verify(token, SECRET_TOKEN);
      return validateToken;
    } catch (error) {
      return false;
    }
  }

  module.exports = authenticate;