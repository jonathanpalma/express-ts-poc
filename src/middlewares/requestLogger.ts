import expressWinston from 'express-winston';
import { Logger } from 'winston';

const requestLogger = (logger: Logger) => {
  expressWinston.requestWhitelist.push('body');
  expressWinston.responseWhitelist.push('body');
  return expressWinston.logger({ winstonInstance: logger });
};

export default requestLogger;
