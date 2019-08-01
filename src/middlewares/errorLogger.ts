import expressWinston from 'express-winston';
import { Logger } from 'winston';

const errorLogger = (logger: Logger) =>
  expressWinston.errorLogger({ winstonInstance: logger });

export default errorLogger;
