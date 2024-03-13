const connection = require("./connection");

const getAll = async () => {
  const query = "SELECT * FROM usuarios";

  const allUsers = await connection.execute(query);
  return allUsers[0];
};

const createUser = async (user) => {
  const { login, password } = user;
  const query = "INSERT INTO usuarios(login, password) VALUES (?, ?)";

  const [createdUser] = await connection.execute(query, [login, password]);
  return createdUser;
};

const getUserByLogin = async (login) => {
  const query = "SELECT * FROM usuarios WHERE login = ?";
  const userExistence = await connection.execute(query, [login]);
  return userExistence[0];
};

module.exports = {
  getAll,
  createUser,
  getUserByLogin,
  // foundUserId,
  // checkPasswordExistence,
};
