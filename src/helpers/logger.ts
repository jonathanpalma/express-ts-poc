import winston from 'winston';
import config from '../config';

const { loggerOptions } = config;

const logger = winston.createLogger({
  transports: [new winston.transports.Console(loggerOptions)],
});

export default logger;
