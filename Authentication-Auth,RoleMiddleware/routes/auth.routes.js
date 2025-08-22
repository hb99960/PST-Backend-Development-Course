const express = require("express");
const { signup, login, refreshToken } = require("../controllers/auth.controller");
const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/refresh-token", refreshToken);

module.exports = authRouter;