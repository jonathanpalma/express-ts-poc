import { Config } from './index';

const development = (commons: Config): Config =>
  Object.assign(commons, {
    loggerOptions: Object.assign(commons.loggerOptions, {
      prettyPrint: true,
      humanReadableUnhandledException: true,
      colorize: true,
    }),
  });

export default development;
