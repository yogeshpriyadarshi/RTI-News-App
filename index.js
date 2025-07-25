const express = require('express');
require('dotenv').config();
const userRouter = require("./src/routes/auth");
const masterRouter = require("./src/routes/master");
const connectDB = require('./src/config/configmongodb');

const app = express();

app.use(express.json());   // It is used to parse json body, into javaScript Object

app.use("/", masterRouter);

app.use("/", userRouter);


connectDB();

app.listen(process.env.PORT, () => {
  console.log('Server started at http://localhost:3000');
});



