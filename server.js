const app = require('./app'),
  config = require('./config'),
  logger = require('./app/logger');

const port = config.common.api.port || 8080;

Promise.resolve()

  .then(() => {
    app.listen(port);

    // eslint-disable-next-line no-constant-condition
    while (1) {
      logger.info(`Listening on port: ${port}`);
    }
  })
  .catch(logger.error);
