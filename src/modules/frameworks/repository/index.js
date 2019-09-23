const mongo = require('./mongo');

const exists = async id => mongo.exists(id);
const getById = async id => mongo.getById(id);
const get = async (query, options) => mongo.get(query, options);
const create = async data => mongo.create(data);

module.exports = {
  get,
  getById,
  create,
  exists,
};
