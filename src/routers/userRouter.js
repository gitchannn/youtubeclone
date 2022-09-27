import express from "express";
import {
  edit,
  remove,
  logout,
  see,
  startGitHubLogin,
  finishGitHubLogin,
  getEdit,
  postEdit,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.route("/edit").get(getEdit).post(postEdit);
userRouter.get("/remove", remove);
userRouter.get("/github/start", startGitHubLogin);
userRouter.get("/github/finish", finishGitHubLogin);
userRouter.get(":id", see);

export default userRouter;
