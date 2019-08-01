import winston from 'winston';

// TODO: Create a config file
const loggerOptions = {
  level: 'debug',
  stringify: false,
  json: true,
  timestamp: true,
};

const logger = winston.createLogger({
  transports: [new winston.transports.Console(loggerOptions)],
});

export default logger;
