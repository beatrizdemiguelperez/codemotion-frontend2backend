const repository = require('../repository');
const { AppError, HttpErrorBuilder } = require('../../../responses/error');

const getById = async (id) => {
  const result = await repository.getById(id);
  if (!result) {
    throw new AppError(HttpErrorBuilder.NOT_FOUND());
  }
  return result;
};

const get = async (query, options) => repository.get(query, options);

const create = async data => repository.create(data);

module.exports = {
  get,
  getById,
  create,
};
