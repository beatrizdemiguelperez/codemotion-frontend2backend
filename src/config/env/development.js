const config = {
  server: {
    appPort: 3002,
  },
  log: {
    logUncaughtException: true,
    pretty: true,
    level: 'debug',
    color: true,
  },
  databases: {
    mongo: {
      url: 'mongodb://localhost:27017',
      dbName: 'developers',
      opts: {
        autoReconnect: true,
        reconnectTries: 30,
        reconnectInterval: 5000,
        socketTimeoutMS: 0,
        keepAlive: true,
        useNewUrlParser: true,
      },
    },
  },
};

module.exports = config;
