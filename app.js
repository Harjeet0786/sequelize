const express = require("express");
const app = express();
const User = require("./controller/UserController");

require("./config/database");
const port = 9000;

app.get("/add", User.addUser);

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(port, async () => {
  console.log(`server is listening the port  is ${port}`);
});
