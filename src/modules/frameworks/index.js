const express = require('express');
const routes = require('./routes');

const init = () => {
  const app = express();
  const router = express.Router();
  routes.init(router);
  app.use(router);

  return app;
};

module.exports = {
  init,
};
