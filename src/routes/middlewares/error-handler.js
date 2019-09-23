
const { AppError, HttpErrorBuilder, responseMapper } = require('../../responses/error');
const { logger } = require('../../libs/logger');

const errorHandler = (err, req, res, next) => {
  const error = err instanceof AppError ? err : HttpErrorBuilder.SERVICE_UNAVAILABLE();

  logger.error(err.stack);

  const errorResponse = responseMapper(error);
  res.status(errorResponse.status).send(errorResponse);
  next();
};

module.exports = errorHandler;
