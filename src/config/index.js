const configEnv = require('./env');

const environment = process.env.NODE_ENV;
const config = configEnv[environment];

// eslint-disable-next-line no-console
console.log(`Environment: ${environment}`);
console.log(`config: ${JSON.stringify(config)}`);

module.exports = config;

