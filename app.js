const express = require("express");
const bodyparser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.get("/", function(req, res) {
  const day = date.getDate();

  res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function(req, res) {
  const item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("on 3000");
});
