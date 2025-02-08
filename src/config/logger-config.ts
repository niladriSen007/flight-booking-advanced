import winston from 'winston';
import chalk from 'chalk';
// Create a new Winston logger instance
const loggerFormat = winston.format.printf(({ level, message, timestamp }) => {
  const colorizedLevel = (() => {
    switch(level) {
      case 'error':
        return chalk.bgRed(level.toUpperCase());
      case 'info':
      case 'warn':
        return chalk.bgHex('#FFA500')(level.toUpperCase()); // Orange background
      case 'success':
        return chalk.bgGreen(level.toUpperCase());
      default:
        return chalk.bgGray(level.toUpperCase());
    }
  })();

  return `${timestamp} : ${colorizedLevel} : ${message}`;
});

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({format : 'YYYY-MM-DD HH:mm:ss'}),
    loggerFormat
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs.log' }),
  ],
});

