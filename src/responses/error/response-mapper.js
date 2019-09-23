module.exports = (AppError) => {
  const {
    status, code, message, data,
  } = AppError;

  return {
    status,
    code,
    description: message,
    errors: data,
  };
};
