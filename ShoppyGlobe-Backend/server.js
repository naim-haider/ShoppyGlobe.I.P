import express from "express";

const app = express();

app.use(express.json()); // to parse JSON bodies

const PORT = 5100;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
