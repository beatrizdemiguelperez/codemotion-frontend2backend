const mongo = require('./mongo');
const editorRepository = require('../../editors/repository');
const languageRepository = require('../../languages/repository');
const databaseRepository = require('../../databases/repository');
const frameworkRepository = require('../../frameworks/repository');

const getById = async id => mongo.getById(id);
const get = async (query, options) => mongo.get(query, options);
const create = async data => mongo.create(data);
const getTopOf = async (field, limit) => mongo.getTopOf(field, limit);

module.exports = {
  get,
  getById,
  getTopOf,
  create,
  getEditor: editorRepository.getById,
  existsEditor: editorRepository.exists,
  getLanguage: languageRepository.getById,
  existsLanguage: languageRepository.exists,
  getDatabase: databaseRepository.getById,
  existsDatabase: databaseRepository.exists,
  getFramework: frameworkRepository.getById,
  existsFramework: frameworkRepository.exists,
};
