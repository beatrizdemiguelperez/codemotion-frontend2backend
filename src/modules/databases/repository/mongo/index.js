const Database = require('./models/database');
const transformToMongoSort = require('../../../../libs/mongo-sort-transformer');

const create = async (database) => {
  const databaseDB = new Database(database);
  const resp = await Database.create(databaseDB);
  return resp;
};

const get = async (query, options) => {
  const q = { ...query, name: { $regex: new RegExp(query.name, 'i') } };
  const opts = { ...options, sort: transformToMongoSort(options.sort) };
  const results = await Database.paginate(q, opts);

  return results;
};

const getById = async (_id, options) => Database.findOne({ _id }, options);

const exists = async (id) => {
  const database = await getById(id, { _id: 1 });

  return Boolean(database);
};

module.exports = {
  get,
  getById,
  create,
  exists,
};
