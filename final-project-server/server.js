const express = require("express");
const cors = require("cors");
const winston = require("winston");
const moment = require("moment");
const path = require("path");
const blogRouter = require("./api/blog/blog-routes");

const app = express();
app.use(express.json());

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.simple(),
  transports: [new winston.transports.File({ filename: "logs/dev.log" })],
});

app.use("/", (req, res, next) => {
  logger.info(` ${req.method} |  ${req.url}  | ${moment()}  `);
  next();
});

const corsOptions = {
  origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
  credentials: true,
};
app.use(cors(corsOptions));

app.use("/api/blogs", blogRouter);
app.use("*", (req, res) => {
  res.status(404).json({ err: "not found" });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
