const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const PostSchema = new Schema(
  {
    author: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now,
    },
    postImage: {
      type: String
    },
  },
  {
    collection: "posts"
  }
);

module.exports = Post = mongoose.model("post", PostSchema);
