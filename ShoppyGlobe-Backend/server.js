import express from "express";
import connectDB from "./database/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/UserRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();
connectDB();

app.use(express.json()); // to parse JSON bodies

// Routes
app.use("/api", productRoutes);
app.use("/api", userRoutes);
app.use("/api", adminRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
