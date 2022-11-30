const usersService = require('../services/usersService');

const verifyCredentials = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  if (password.length < 6) {
    return res.status(400)
      .json({ message: 'Password must be at least 6 characters' });
  }

  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: 'Email must have a valid format',
    });
  }

  const verifyUser = await usersService.findByEmail(email);

  if (verifyUser) res.status(401).json({ message: 'User already exists' });

  next();
};

module.exports = verifyCredentials;
