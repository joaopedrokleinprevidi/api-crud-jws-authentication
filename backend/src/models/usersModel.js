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

// const checkPasswordExistence = async (password) => {
//   const query = "SELECT * FROM usuarios WHERE password = ?";
//   const passwordExistence = await connection.execute(query, [password]);
//   if (passwordExistence.length > 0) {
//     console.log("Senha válida.");
//     return passwordExistence;
//   } else {
//     console.log("Senha inválida.");
//     return false;
//   }
// };

// const foundUserId = async (login) => {
//   const query = "SELECT id FROM usuarios WHERE login = ?";
//   const userId = await connection.execute(query, [login]);
//   if (userId.length > 0) {
//     console.log("ID Válido.");
//     return userId[0].id;
//   } else {
//     console.log("ID Inválido.");
//     return null;
//   }
// };

module.exports = {
  getAll,
  createUser,
  getUserByLogin,
  // foundUserId,
  // checkPasswordExistence,
};
