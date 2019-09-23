const bunyan = require('bunyan');
const bformat = require('bunyan-format');
const config = require('../config');
const { name } = require('../../package.json');

const { pretty, color, level } = config.log;

function createLogger() {
  const stream = pretty ?
    bformat({ color, outputMode: 'short' }) :
    process.stdout;

  const useStream = level !== 'silent';

  return bunyan.createLogger({
    name,
    streams: useStream ? [{ level, stream }] : [],
    serializers: {
      err(err) {
        if (typeof err === 'string') {
          return { message: err };
        }

        const result = bunyan.stdSerializers.err(err);
        // log any enumerable properties not grabbed by bunyan
        if (err && typeof err === 'object') {
          Object.keys(err).forEach((key) => {
            if (key !== 'error@context' && !result[key]) {
              result[key] = err[key];
            }
          });
        }

        return result;
      },
    },
  });
}

const logger = createLogger();

if (config.log.logUncaughtException) {
  process.on('uncaughtException', (err) => {
    logger.fatal({ err }, 'Uncaught exception');
    process.exit(1);
  });
}

const LAYERS = Object.freeze({
  DOMAIN: {
    name: 'DOMAIN',
    color: '0;36',
  },
  ROUTE: {
    name: 'ROUTE',
    color: '0;94',
  },
  EXTERNAL_API: {
    name: 'EXTERNAL_API',
    color: '0;34',
  },
  SERVER: {
    name: 'SERVER',
    color: '0;33',
  },
});

const logLayer = layer => (eventName, message, logLevel = 'info') => {
  let msg = `[${layer.name}][${eventName}]: ${message || ''}`;
  if (color) {
    msg = `\x1b[${layer.color}m${msg}\x1b[0m`;
  }
  logger[logLevel](msg);
};
const logDomain = logLayer(LAYERS.DOMAIN);
const logRoute = logLayer(LAYERS.ROUTE);
const logExternalApi = logLayer(LAYERS.EXTERNAL_API);
const logServer = logLayer(LAYERS.SERVER);

module.exports = {
  logServer,
  logDomain,
  logRoute,
  logExternalApi,
  logger,
};
