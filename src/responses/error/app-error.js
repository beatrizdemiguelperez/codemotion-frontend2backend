module.exports = class AppError extends Error {
  constructor(error, data) {
    super(error.message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
    this.code = error.code;
    this.status = error.status;
    this.data = data;
  }
};
