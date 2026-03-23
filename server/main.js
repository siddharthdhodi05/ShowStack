import express from "express";
import dotenv from "dotenv";
import connectDB from "#config/db.config.js";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

dotenv.config();

const port = process.env.PORT || 5004;

connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on port ${port}`);
});
