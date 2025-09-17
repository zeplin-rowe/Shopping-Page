import express from "express";
import dotenv from "dotenv";

dotenv.config();

import connectDB from "./config/db.js";

const app = express();

app.get("/products", (req, res) => {});

app.listen(5001, () => {
  connectDB();
  console.log("Server started at http://localhost:5001");
});
