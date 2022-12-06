const errorMiddleware = (err, _req, res, _next) => {
  const { message, status } = err;

  return res.status(status || 500).json({ message });
};

module.exports = errorMiddleware;