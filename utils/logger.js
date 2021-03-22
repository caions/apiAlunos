var winston = require('winston');
const { combine, timestamp, printf } = winston.format;

//format define
const transport = new winston.transports.File({
  filename: "somefile.log",
  datePattern: "YYYY-MM-DD",
  maxSize: "10240k",
  maxFiles: "14d",
  level: "debug",
  json: true,
  timestamp: true,
})
// print define
const myFormat = printf(({ level, message, label, host }) => {
  console.log(level)
  return `${host}`;
});
var logger = winston.createLogger({
  format: combine(
    timestamp({format: "DD-MM-YYYY HH:mm:ss"}),
    winston.format.errors({ stack: false }),
    winston.format.json(),
    myFormat
  ),
  transports: [transport]
});



module.exports = logger