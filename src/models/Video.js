import mongoose from "mongoose";

// define the shape of the model
const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

// create model
const Video = mongoose.model("Video", videoSchema);

export default Video;
