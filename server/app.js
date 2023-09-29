// ? dependencies
const cors = require("cors");

const express = require("express");
const httpStatus = require("http-status");

const logger = require("morgan");
const connectDB = require("./config/connector");

require("dotenv").config({ path: `${__dirname}/../.env` });
connectDB();
const app = express();

app.use(cors());

app.use(logger("tiny"));

app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (_req, res) => {
  res.status(httpStatus.OK).json({
    data: {
      message: "The API is not working perfectly",
    },
  });
});
app.use("/api/v1/public", require("./routes/v1/public/index"));

app.use((err, _req, res, next) => {
  if (!err) {
    next();
    return;
  }

  err.statusCode ||
    res
      .status(err.statusCode || 500)
      .json({ message: err.message || "Something Went Wrong" });
});

app.listen(app.get("port"), () => {
  console.log(`listening on port ${app.get("port")} in ${app.get("env")} mode`);
});
