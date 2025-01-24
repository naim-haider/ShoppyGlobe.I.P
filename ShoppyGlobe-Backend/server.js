import express from "express";
import connectDB from "./database/db.js";

const app = express();
connectDB();

app.use(express.json()); // to parse JSON bodies

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
