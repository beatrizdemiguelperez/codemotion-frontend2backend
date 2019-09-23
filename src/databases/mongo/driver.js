const mongoose = require('mongoose');
const { logServer } = require('../../libs/logger');

class MongoDriver {
  constructor(uri, dbName, options) {
    this.config = { uri, dbName, options };
  }

  async connectAsync() {
    const { uri, dbName, options } = this.config;
    const defaultOptions = {
      dbName,
    };

    const connectionPromise = new Promise((resolve, reject) => {
      mongoose.Promise = global.Promise;

      if (this.db) {
        return resolve(this.db);
      }

      logServer('MONGO_URL', `mongo url: ${uri}`);

      return mongoose.connect(uri, { ...defaultOptions, ...options })
        .then(() => {
          this.db = mongoose.connection;
          logServer('MONGO_CONNECCTION', 'Mongo Connection Created');
          resolve(this.db);
        })
        .catch((err) => {
          logServer('MONGO_CONNECCTION', `Error connecting mongo ${err}`, 'error');
          reject(err);
        });
    });

    return connectionPromise;
  }

  async disconnectAsync() {
    return this.db.close();
  }
}

module.exports = MongoDriver;
