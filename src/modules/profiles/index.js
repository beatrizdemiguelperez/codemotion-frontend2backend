const express = require('express');
const ProfileRoutes = require('./routes');

const init = () => {
  const app = express();
  const router = express.Router();
  ProfileRoutes.init(router);
  app.use(router);

  return app;
};

module.exports = {
  init,
};
