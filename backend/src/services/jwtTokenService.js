const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtTokenService = {};
const tokenPassword = process.env.TOKEN_PASSWORD;

jwtTokenService.gerarToken = (object) => {
  const token = jwt.sign(object, tokenPassword, { expiresIn: "1hr" });
  return token;
};

module.exports = jwtTokenService;
