const Joi = require('@hapi/joi');

const getParamsSchema = Joi.object().keys({
  name: Joi.string(),
  sort: Joi.string(),
  offset: Joi.string(),
  limit: Joi.string().max(100),
});

module.exports = getParamsSchema;
