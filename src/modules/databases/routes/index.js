const controller = require('./controller');
const domain = require('../domain');
const { validator } = require('../../../routes/middlewares');
const { objectId } = require('../../../routes/schemas');
const { createBody, getParams } = require('./schemas');

const init = (router) => {
  router.get(
    '/',
    controller.get(domain.get),
  );

  router.post(
    '/',
    validator({ schema: createBody, path: 'body' }),
    controller.create(domain.create),
  );

  router.get(
    '/:id',
    validator({ schema: objectId, path: 'params' }),
    validator({ schema: getParams, path: 'query' }),
    controller.getById(domain.getById),
  );

  return router;
};

module.exports = { init };
