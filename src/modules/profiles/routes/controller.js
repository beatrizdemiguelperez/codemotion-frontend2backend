const {
  responseMapper,
} = require('../../../responses/success');

const PAGE_SIZE = 20;

const create = createDomain => async (req, res, next) => {
  try {
    const data = await createDomain(req.body);
    res.status(201).send(responseMapper(data));
  } catch (err) {
    next(err);
  }
};

const get = getDomain => async (req, res, next) => {
  try {
    const {
      sort,
      offset = 0,
      limit = PAGE_SIZE,
      ...query
    } = req.query;
    const data = await getDomain(query, { sort, offset, limit });
    res.send(responseMapper(data));
  } catch (err) {
    next(err);
  }
};

const getById = getByIdDomain => async (req, res, next) => {
  try {
    const data = await getByIdDomain(req.params.id);
    res.send(responseMapper(data));
  } catch (err) {
    next(err);
  }
};

const getScores = getScoresDomain => async (req, res, next) => {
  try {
    const data = await getScoresDomain(req.params.id);
    res.send(responseMapper(data));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  get,
  getById,
  getScores,
};
