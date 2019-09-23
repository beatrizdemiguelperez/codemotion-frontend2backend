const Joi = require('@hapi/joi');

const base = {
  name: Joi.string().max(256).required(),
};

module.exports = base;
