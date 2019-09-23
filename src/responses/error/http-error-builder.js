const httpStatus = require('http-status');

const messageKey = statusCode => `${statusCode}_MESSAGE`;

const errorBuilder = (PREFIX) => {
  const getCode = number => `${PREFIX}-${number}`;
  const errors = {
    BAD_REQUEST: number => ({
      code: getCode(number),
      status: httpStatus.BAD_REQUEST,
      message: httpStatus[messageKey(httpStatus.BAD_REQUEST)],
    }),
    FORBIDDEN: number => ({
      code: getCode(number),
      status: httpStatus.FORBIDDEN,
      message: httpStatus[messageKey(httpStatus.FORBIDDEN)],
    }),
    NOT_FOUND: number => ({
      code: getCode(number),
      status: httpStatus.NOT_FOUND,
      message: httpStatus[messageKey(httpStatus.NOT_FOUND)],
    }),
    SERVICE_UNAVAILABLE: number => ({
      code: getCode(number),
      status: httpStatus.SERVICE_UNAVAILABLE,
      message: httpStatus[messageKey(httpStatus.SERVICE_UNAVAILABLE)],
    }),
  };
  return errors;
};
const { name } = require('../../../package.json');

module.exports = errorBuilder(name);
