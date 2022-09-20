import express from "express";
import { see, edit, deleteVideo, upload } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id", see);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", deleteVideo);
videoRouter.get("/upload", upload);

export default videoRouter;
