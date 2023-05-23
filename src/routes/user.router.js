const {
  getAll,
  create,
  getOne,
  remove,
  update,
  verifyCode,
  getLoggedUser,
  login,
} = require("../controllers/user.controllers");
const express = require("express");
const verifyJWT = require("../utils/verifyJWT");

const userRouter = express.Router();

userRouter.route("/").get(verifyJWT, getAll).post(create);

userRouter.route("/me").get(verifyJWT, getLoggedUser);

userRouter.route("/login").post(login);

userRouter.route("/verify/:code").get(verifyCode);

userRouter
  .route("/:id")
  .get(getOne)
  .delete(verifyJWT, remove)
  .put(verifyJWT, update);

module.exports = userRouter;
