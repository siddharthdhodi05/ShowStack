import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.config.js";

const app = express();

dotenv.config();

const port = process.env.PORT || 5004;

connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on port ${port}`);
});
