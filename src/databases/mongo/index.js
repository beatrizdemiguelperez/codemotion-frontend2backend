const MongoDriver = require('./driver');

const init = async ({
  url,
  dbName,
  opts,
}) => {
  const mongoDriver = new MongoDriver(url, dbName, opts);

  await mongoDriver.connectAsync();

  return mongoDriver;
};

module.exports = {
  init,
};
