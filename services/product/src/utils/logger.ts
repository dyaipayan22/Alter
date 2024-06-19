import { createLogger, transports, format } from 'winston';
const { combine, timestamp, printf, prettyPrint } = format;

const logger = createLogger({
  transports: [new transports.Console()],
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level} ${message}`;
    }),
    prettyPrint()
  ),
});

export default logger;
