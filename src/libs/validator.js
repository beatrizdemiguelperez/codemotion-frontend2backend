const Joi = require('@hapi/joi');

const mapError = error => ({
  field: error.context.key,
  type: error.type,
  message: error.message,
});

// eslint-disable-next-line consistent-return
const validate = async (schema, value, options = { abortEarly: false }) => {
  try {
    await Joi.validate(value, schema, options);
  } catch (e) {
    const errors = e.details || [];
    return errors.map(mapError);
  }
};

module.exports = validate;
