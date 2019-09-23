const { logRoute } = require('../../libs/logger');

const requestLogger = (req, res, next) => {
  const { method, url } = req;
  logRoute('START_REQUEST', `[${method}] ${url}`);
  next();
};

module.exports = requestLogger;
