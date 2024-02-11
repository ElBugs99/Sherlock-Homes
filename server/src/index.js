//const express = require("express");
import express from "express";
import router from "./routes/index.js";
const app = express();
//routes
app.use(router);
app.listen(3000);
console.log('server on port 3000');