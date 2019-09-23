const cors = require('cors');
const contextService = require('request-context');
const bodyparser = require('body-parser');
const profilesApp = require('../modules/profiles');
const editorsApp = require('../modules/editors');
const frameworksApp = require('../modules/frameworks');
const languagesApp = require('../modules/languages');
const databasesApp = require('../modules/databases');
const { errorHandler, requestLogger } = require('./middlewares');

const init = (router) => {
  router.use(cors());
  router.use(contextService.middleware('request'));
  router.use(requestLogger);
  router.use(bodyparser.json());
  router.use('/profiles', profilesApp.init());
  router.use('/editors', editorsApp.init());
  router.use('/frameworks', frameworksApp.init());
  router.use('/languages', languagesApp.init());
  router.use('/databases', databasesApp.init());
  router.use(errorHandler);

  return router;
};


module.exports = {
  init,
};
