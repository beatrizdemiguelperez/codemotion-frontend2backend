const Joi = require('@hapi/joi');
const base = require('./base');

const createSchema = Joi.object().keys(base).required();

module.exports = createSchema;
