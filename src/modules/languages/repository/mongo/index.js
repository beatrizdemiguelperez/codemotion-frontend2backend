const Language = require('./models/language');
const transformToMongoSort = require('../../../../libs/mongo-sort-transformer');

const create = async (language) => {
  const languageDB = new Language(language);
  const resp = await Language.create(languageDB);
  return resp;
};

const get = async (query, options) => {
  const q = { ...query, name: { $regex: new RegExp(query.name, 'i') } };
  const opts = { ...options, sort: transformToMongoSort(options.sort) };
  const results = await Language.paginate(q, opts);

  return results;
};

const getById = async (_id, options) => Language.findOne({ _id }, options);

const exists = async (id) => {
  const language = await getById(id, { _id: 1 });

  return Boolean(language);
};

module.exports = {
  get,
  getById,
  create,
  exists,
};
