import express from "express";
import { getJoin, postJoin, login } from "../controllers/userController";
import { home, search } from "../controllers/videoController";

const rootRouter = express.Router();

rootRouter.get("/", home); // video
rootRouter.route("/join").get(getJoin).post(postJoin); // user
rootRouter.get("/login", login); // user
rootRouter.get("/search", search); // video

export default rootRouter;
