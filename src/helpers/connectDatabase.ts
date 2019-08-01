import { Sequelize } from 'sequelize';
import config from '../config';
import logger from './logger';

const { keys } = config;
const sequelize = new Sequelize(keys.databaseURI);

let connectionRetries = 1;
let reconnectionTimeout: NodeJS.Timeout;

async function connectDatabase(): Promise<void> {
  try {
    clearTimeout(reconnectionTimeout);
    logger.info(`Trying to connect to the database at ${keys.databaseURI}.`);
    await sequelize.authenticate();
    logger.info('Connection has been established successfully.');
  } catch (err) {
    logger.error(
      `${connectionRetries} - Unable to connect to the database at ${keys.databaseURI}. Retrying in 5 sec.`,
      err
    );
    connectionRetries += 1;
    await sequelize.close();
    reconnectionTimeout = setTimeout(connectDatabase, 5000);
  }
}

process.on('SIGINT', async () => {
  try {
    await sequelize.close();
    logger.info(
      'Sequelize default connection disconnected through app termination'
    );
  } catch (err) {
    logger.error('Error trying to disconnect Sequelize default connection');
  } finally {
    process.exit();
  }
});

export default connectDatabase;
