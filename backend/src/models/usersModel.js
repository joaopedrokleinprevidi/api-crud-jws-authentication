const connection = require("./connection");

const getAll = async () => {
  const query = "SELECT * FROM usuarios";

  const allUsers = await connection.execute(query);
  return allUsers[0];
};

module.exports = {
  getAll,
};
