const validate = require('../../libs/validator');
const { AppError, HttpErrorBuilder } = require('../../responses/error');

const validationMiddleware = ({ schema, path }) => async (req, res, next) => {
  const errors = await validate(schema, req[path]);
  if (errors) {
    next(new AppError(HttpErrorBuilder.BAD_REQUEST(1), { errors }));
  }
  next();
};

module.exports = validationMiddleware;
