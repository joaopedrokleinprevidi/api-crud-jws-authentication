const express = require("express");
const usersController = require("./controllers/usersController");

const router = express.Router();

router.get("/users", usersController.getAll);

router.post("/users", usersController.createUser);

router.post("/users/login", usersController.loginUser);

module.exports = router;
