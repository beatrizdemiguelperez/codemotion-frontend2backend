const repository = require('../repository');
const { AppError, HttpErrorBuilder } = require('../../../responses/error');

const SCORE_LEVELS = 4;

const getById = async (id) => {
  const result = await repository.getById(id);
  if (!result) {
    throw new AppError(HttpErrorBuilder.NOT_FOUND());
  }
  return result;
};

const checks = [
  { check: repository.existsEditor, propertyName: 'editorId' },
  { check: repository.existsLanguage, propertyName: 'languageId' },
  { check: repository.existsFramework, propertyName: 'frameworkId' },
  { check: repository.existsDatabase, propertyName: 'databaseId' },
];

const getScores = async (id) => {
  const profile = await getById(id);
  let scores = 0;
  const POINTS = {
    0: 4,
    1: 3,
    2: 2,
    3: 1,
  };
  for (let index = 0; index < checks.length; index++) {
    const i = checks[index];
    const { propertyName } = i;
    const tops = await repository.getTopOf(propertyName, SCORE_LEVELS);
    const foundTop = tops.findIndex(top => top._id[propertyName] === profile[propertyName]);
    const points = foundTop === -1 ? 0 : POINTS[foundTop];
    scores += points;
  }

  const level = scores / 16;

  return { level, name: profile.name };
};

const get = async (query, options) => repository.get(query, options);

const create = async (data) => {
  for (let index = 0; index < checks.length; index++) {
    const i = checks[index];
    const id = data[i.propertyName];
    const isValid = await i.check(id);

    if (!isValid) {
      throw new AppError(HttpErrorBuilder.BAD_REQUEST(), `${id} not found`);
    }
  }

  const profile = await repository.create(data);

  return profile;
};

module.exports = {
  get,
  getById,
  getScores,
  create,
};
