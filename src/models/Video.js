import mongoose from "mongoose";

// define the shape of the model
const videoSchema = new mongoose.Schema({
  // describe our database to mongoose.
  title: String,
  description: String,
  createdAt: { type: Date, required: true },
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

// create model
const Video = mongoose.model("Video", videoSchema);

export default Video;
