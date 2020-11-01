require('./model/serviceModel');

const express = require('express');
const globalErrorHandling = require('./controller/errorController');
const userRouter = require('./Router/serverRouter');

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(globalErrorHandling);

module.exports = app;