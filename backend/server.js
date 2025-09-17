import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

app.use(express.json()); // allows us to accept JSON data in the req.body
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRoutes);

app.listen(5001, () => {
  connectDB();
  console.log("Server started at http://localhost:5001");
});
