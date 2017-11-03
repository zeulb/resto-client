var config = require('./config/default.json');

if (process.env.NODE_ENV === 'production') {
  config = {
    ...config,
    ...(require('./config/production.json'))
  };
}

export default config;
