
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.end("home page")
});

app.listen(3000, () => {
  console.log("Server is running");
});