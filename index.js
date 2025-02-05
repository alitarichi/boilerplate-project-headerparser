require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Test API
app.get("/api/hello", (req, res) => {
  res.json({ greeting: "hello API" });
});

// Header Parser API
app.get("/api/whoami", (req, res) => {
  res.json({
    ipaddress: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
  });
});

// Start server
var listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
