const Mongoose = require("mongoose");

const blogSchema = new Mongoose.Schema(
  {
    title: String,
    createdBy: { type: Mongoose.Schema.Types.ObjectId, ref: "User" },
    createAt: Date,
    content: String,
    image: String,
    likesBy: [{ type: Mongoose.Schema.Types.ObjectId, ref: "User" }],
    hateBy: [{ type: Mongoose.Schema.Types.ObjectId, ref: "User" }],
    tags: [{ type: String, index: true }],
  },
  { collection: "blogs", timestamps: true }
);

const Blog = Mongoose.model("Blog", blogSchema);
module.exports = Blog;
