const express = require("express");
const User = require("./models/User");
const PORT = 8000
const app = express();

app.get("/api/users", (request, response) => {
  User.findAll().then((users) => {
    response.json(users);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on http://127.0.0.1:${PORT} `)
});
