import { createLogger, transports, format } from 'winston';
const { combine, timestamp, printf, prettyPrint, colorize } = format;

const logger = createLogger({
  transports: [new transports.Console()],
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level} ${message}`;
    })
  ),
});

export default logger;
