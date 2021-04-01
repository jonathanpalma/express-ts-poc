import express from 'express';
import cors from 'cors';
import config from './config';
import logger from './utils/logger';
import errorLogger from './middlewares/errorLogger';
import requestLogger from './middlewares/requestLogger';
import versionRouter from './routes/versionRouter';

const app = express();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// logger
app.use(errorLogger(logger));
app.use(requestLogger(logger));

// routes
app.use('/version', versionRouter);

const { port } = config;
app.listen(port, () => {
  logger.info(`Started on port ${port}`);
});
