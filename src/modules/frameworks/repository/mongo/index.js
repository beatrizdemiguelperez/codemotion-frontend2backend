const Framework = require('./models/framework');
const transformToMongoSort = require('../../../../libs/mongo-sort-transformer');

const create = async (framework) => {
  const frameworkDB = new Framework(framework);
  const resp = await Framework.create(frameworkDB);
  return resp;
};

const get = async (query, options) => {
  const q = { ...query, name: { $regex: new RegExp(query.name, 'i') } };
  const opts = { ...options, sort: transformToMongoSort(options.sort) };
  const results = await Framework.paginate(q, opts);

  return results;
};

const getById = async (_id, options) => Framework.findOne({ _id }, options);

const exists = async (id) => {
  const framework = await getById(id, { _id: 1 });

  return Boolean(framework);
};

module.exports = {
  get,
  getById,
  create,
  exists,
};
