const bcrypt = require("bcryptjs");

const bcryptService = {};

bcryptService.hashPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

bcryptService.comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = bcryptService;
