const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3000;

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
