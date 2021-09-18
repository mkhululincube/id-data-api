const express = require("express");
require("dotenv").config();
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// const { GraphQLServer } = require("graphql-yoga");

const app = express();
const User = require("./routes/users.routes");

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("combined"));
app.use(cors());

app.use(User);

app.use(function (req, res, next) {
  res.status(404).json({ errorCode: 404, errorMsg: "route not found" });
});

app.get("/", (req, res) => {
  res.json({ message: "Smartworld v1" });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server running on 3000 ${process.env.NODE_ENV}`);
});
