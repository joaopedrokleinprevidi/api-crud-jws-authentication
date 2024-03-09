const usersModel = require("../models/usersModel");
const bcryptService = require("../services/bcryptService");
const tokenService = require("../services/jwtTokenService");
require("dotenv").config();

const tokenPassword = process.env.TOKEN_PASSWORD;

const getAll = async (_req, res) => {
  const users = await usersModel.getAll();
  return res.status(200).json(users);
};

const createUser = async (req, res) => {
  const { login, password } = req.body;
  const hashedPassword = bcryptService.hashPassword(password);

  const createdUser = await usersModel.createUser({
    login,
    password: hashedPassword,
  });
  return res.status(201).json(createdUser);
};

const loginUser = async (req, res) => {
  const { login, password } = req.body;

  const user = await usersModel.getUserByLogin(login);
  //até aqui ok
  // console.log(user);
  // console.log(user[0].id);
  // console.log(user[0].password);

  if (user == false) {
    return res.status(400).send("Não foi possível encontrar o usuário.");
  }
  //até aqui ok.
  try {
    //A senha no DB está criptografada. Então devo me atentar a isso, pois isso abaixo pode gerar erro.
    // const passwordFound = await usersModel.checkPasswordExistence(password)

    const verifyPassword = bcryptService.comparePassword(
      password,
      user[0].password
    );

    if (verifyPassword) {
      console.log("Usuário logado.");
      const userPermissions = {
        id: user[0].id,
        login: user[0].login,
        role: "normal-user",
      };

      const token = tokenService.gerarToken(userPermissions);
      console.log(token, "  token aqui");
      return res.json({
        token,
        message: "Usuário logado, token criado, permissões atribuídas.",
      });
    } else {
      throw new Error("Senha não encontrada.");
    }
  } catch (error) {
    return res.json(error);
  }
};

module.exports = {
  getAll,
  createUser,
  loginUser,
};
