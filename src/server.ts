import app from '.';
import config from './config';
import logger from './utils/logger';

const { port } = config;
const server = app.listen(port, () => {
  logger.info(`Server started at http://localhost:${port}`);
});

export default server;
