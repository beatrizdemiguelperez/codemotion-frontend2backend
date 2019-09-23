module.exports = {
  server: {
    appPort: process.env.PORT,
  },
  log: {
    logUncaughtException: true,
    pretty: true,
    level: 'info',
    color: false,
  },
  databases: {
    mongo: {
      url: process.env.MONGO_URL,
      dbName: process.env.MONGO_DBNAME,
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
