import express from "express";
import { join } from "../controllers/userController";
import { trending } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", trending); // videoController
globalRouter.get("/join", join); // userController

export default globalRouter;
