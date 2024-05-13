//const express = require("express");
import express from "express";
import router from "./routes/index.js";
/* import { Sequelize } from "sequelize" */
const app = express();
import cors from 'cors';
app.use(cors());
//routes
app.use(router);
app.listen(3001);
console.log('server on port 3001');