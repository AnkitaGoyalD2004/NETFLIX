const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth.js");
const userRoute = require("./routes/users.js");
const movieRoute = require("./routes/movies.js");

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);

// Start the server
const PORT = process.env.PORT || 8200;
app.listen(PORT, () => {
  console.log(`Backend Server is running on port ${PORT}`);
});
