const express = require('express');
const bodyparser = require('body-parser');
const routes = require('../routes');
const { logServer } = require('../libs/logger');

const init = () => {
  const app = express();
  const router = express.Router();

  routes.init(router);
  app.use(bodyparser.json());
  app.use('/api', router);

  logServer('SERVER_INIT', 'Server initializated');

  return app;
};

const listen = (app, port) => new Promise((resolve, reject) => {
  app.listen(port, (error) => {
    if (error) {
      logServer('SERVER_LISTEN', `Could not listen on ${port}`, 'error');
      reject(error);
    } else {
      logServer('SERVER_LISTEN', `Server listening on ${port}`);
      resolve();
    }
  });
});

module.exports = {
  init,
  listen,
};
