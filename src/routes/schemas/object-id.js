const Joi = require('@hapi/joi');
const idSchema = require('./id');

const objectId = Joi.object().keys({
  id: idSchema,
}).required();

module.exports = objectId;
