require("dotenv").config();

console.log("PORT =", process.env.PORT);

module.exports = {
  PORT: process.env.PORT || 3000,
};