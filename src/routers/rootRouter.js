import express from "express";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
} from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import { publicOnlyMiddleware } from "../middlewares";

const rootRouter = express.Router();

rootRouter.get("/", home); // video
rootRouter.route("/join").all(publicOnlyMiddleware).get(getJoin).post(postJoin); // user
rootRouter
  .route("/login")
  .all(publicOnlyMiddleware)
  .get(getLogin)
  .post(postLogin); // user
rootRouter.get("/search", search); // video

export default rootRouter;
