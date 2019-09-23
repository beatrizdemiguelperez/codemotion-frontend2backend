const databases = require('./databases');
const server = require('./server');
const config = require('./config');
const { logger } = require('./libs/logger');

const app = server.init();

databases
  .init(config.databases)
  .then(() => server.listen(app, config.server.appPort))
  .catch((e) => {
    logger.error(e);
    process.exit(-1);
  });
