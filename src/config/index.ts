import { transports } from 'winston';
import development from './development';
import production from './production';

require('dotenv').config();

export interface Config {
  env: string;
  loggerOptions: transports.ConsoleTransportOptions;
  port: number;
}

const commons = {
  env: process.env.NODE_ENV || 'development',
  loggerOptions: {
    level: 'debug',
    stringify: false,
    json: true,
    timestamp: true,
  },
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3001,
};

const config =
  process.env.NODE_ENV !== 'production'
    ? development(commons)
    : production(commons);

export default Object.freeze(Object.assign({}, config));
