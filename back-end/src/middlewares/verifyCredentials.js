const verifyCredentials = (req, res, next) => {
  const { name, email, password } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  if (name.length < 12) { 
    return res.status(400).json({ message: 'Name must have at least 12 characters' });
  }

  if (password.length < 6) {
    return res.status(400)
      .json({ message: 'Password must have at least 6 characters' });
  }

  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: 'Email must have a valid format',
    });
  }

  next();
};

module.exports = verifyCredentials;
