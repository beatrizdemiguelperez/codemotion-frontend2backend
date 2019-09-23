const Editor = require('./models/editor');
const transformToMongoSort = require('../../../../libs/mongo-sort-transformer');

const create = async (editor) => {
  const editorDB = new Editor(editor);
  const resp = await Editor.create(editorDB);
  return resp;
};

const get = async (query, options) => {
  const q = { ...query, name: { $regex: new RegExp(query.name, 'i') } };
  const opts = { ...options, sort: transformToMongoSort(options.sort) };
  const results = await Editor.paginate(q, opts);

  return results;
};

const getById = async (_id, options) => Editor.findOne({ _id }, options);

const exists = async (id) => {
  const editor = await getById(id, { _id: 1 });

  return Boolean(editor);
};

module.exports = {
  get,
  getById,
  create,
  exists,
};
