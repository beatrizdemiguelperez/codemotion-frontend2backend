const mongo = require('./mongo');

const init = async config => mongo.init(config.mongo);

module.exports = {
  init,
};
