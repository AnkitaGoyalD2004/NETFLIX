const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth.js");

dotenv.config();
mongoose
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

app.use(express.json());

app.use("/api/auth", authRoute);

// Start the server
const PORT = process.env.PORT || 8200;
app.listen(PORT, () => {
  console.log(`Backend Server is running on port ${PORT}`);
});
