
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use((exo = press.urlencoded({ extended: true })));
app.use(express.json());

//express App needs this code to display static pages

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
