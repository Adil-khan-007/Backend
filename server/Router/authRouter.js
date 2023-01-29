const express = require("express");
const { register, login } = require("../Controllers/auth");

const AuthRouter = express.Router();

AuthRouter.post("/signup",register);

AuthRouter.post("/login",login);

module.exports = AuthRouter;