const Joi = require('@hapi/joi');
const { id } = require('../../../../routes/schemas');

const base = {
  name: Joi.string().max(256).required(),
  editorId: id.required(),
  languageId: id.required(),
  frameworkId: id.required(),
  databaseId: id.required(),
};

module.exports = base;
