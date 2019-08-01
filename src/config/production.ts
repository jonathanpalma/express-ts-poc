import { Config } from './index';

const production = (commons: Config): Config =>
  Object.assign(commons, {
    loggerOptions: Object.assign(commons.loggerOptions, {
      prettyPrint: false,
      humanReadableUnhandledException: false,
      colorize: false,
    }),
  });

export default production;
