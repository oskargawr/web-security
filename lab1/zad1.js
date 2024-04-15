const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const basicAuth = require("express-basic-auth");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(
  basicAuth({
    users: { admin: "admin" },
    unauthorizedResponse: (req) => {
      return req.auth
        ? "Credentials " + req.auth.user + ":" + req.auth.password + " rejected"
        : "No credentials provided";
    },
  })
);

app.get("/zad1", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
