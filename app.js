const express = require("express");

//Routers
const { recordsRouter } = require("./routers/records.router");

//init express app
const app = express();

//app util json
app.use(express.json());

//define endpoint
app.use("/api/v1/records", recordsRouter);

module.exports = { app };
