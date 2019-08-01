import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config';
import { connectDatabase, sequelize } from './helpers/connectDatabase';
import logger from './helpers/logger';
import errorLogger from './middlewares/errorLogger';
import requestLogger from './middlewares/requestLogger';
import versionRouter from './routes/versionRouter';

const app = express();

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// logger
app.use(errorLogger(logger));
app.use(requestLogger(logger));

// routes
app.use('/version', versionRouter);

// database
connectDatabase();

const { port } = config;
app.listen(port, () => {
  logger.info(`Started on port ${port}`);
});

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
