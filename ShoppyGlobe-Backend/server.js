import express from "express";
import connectDB from "./database/db.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
connectDB();

app.use(express.json()); // to parse JSON bodies

// Routes
app.use("/api", productRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
