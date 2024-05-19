import express from "express";
import router from "./routes/index.js";
import cors from 'cors';

const app = express();

// Middleware to handle CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(router);

app.listen(3001, () => {
  console.log('server on port 3001');
});