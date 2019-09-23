const controller = require('./controller');
const profileDomain = require('../domain');
const { validator } = require('../../../routes/middlewares');
const { objectId } = require('../../../routes/schemas');
const { createBody, getParams } = require('./schemas');

const init = (router) => {
  // GET api/profiles/
  router.get(
    '/',
    controller.get(profileDomain.get),
  );

  // POST api/profiles/
  router.post(
    '/',
    validator({ schema: createBody, path: 'body' }),
    controller.create(profileDomain.create),
  );

  // GET api/profiles/:id/scores
  router.get(
    '/:id/scores',
    validator({ schema: objectId, path: 'params' }),
    controller.getScores(profileDomain.getScores),
  );

  // GET api/profiles/:id
  router.get(
    '/:id',
    validator({ schema: objectId, path: 'params' }),
    validator({ schema: getParams, path: 'query' }),
    controller.getById(profileDomain.getById),
  );

  return router;
};

module.exports = { init };
