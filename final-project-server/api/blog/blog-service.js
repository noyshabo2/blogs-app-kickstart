const Blog = require("./blog-model");
// const Tag = require("../tag/tag-model");
const logger = require("../../helpers/winston");
const path = require("path");
const mongoose = require("mongoose");

module.exports = {
  addBlog: async (title, content, tags, image) => {
    try {
      logger.info(`[addBlog] - ${path.basename(__filename)}`);
      const newBlog = new Blog({
        title,
        content,
        tags,
        image,
        createdAt: new Date(),
        // createdBy: req.user._id,
      });
      return await newBlog.save();
    } catch (error) {
      logger.error(error);
      throw new Error("Internal Server Error");
    }
  },
  getAllBlogs: async (filterByTags, sortBy = "createdAt") => {
    try {
      logger.info(`[getAllBlogs] - ${path.basename(__filename)}`);
      if (!filterByTags) {
        return await Blog.find()
          .populate("createdBy", "name")
          .sort({ [sortBy]: -1 });
      }
      return await Blog.find({ tags: { $in: filterByTags } }).populate(
        "createdBy",
        "name"
      );
    } catch (error) {
      logger.error(error);
      throw new Error("Internal Server Error");
    }
  },
  getBlogById: async (id) => {
    try {
      logger.info(`[getBlogById] - ${path.basename(__filename)}`);
      return await Blog.findById(id).populate("createdBy", "name");
    } catch (error) {
      logger.error(error);
      throw new Error("Internal Server Error");
    }
  },
  updateBlogLikes: async (likesBy) => {
    try {
      logger.info(`[updateBlog] - ${path.basename(__filename)}`);
      const blog = await Blog.findById(blogId);
      if (!blog) {
        throw new Error("Blog not found");
      }
      //   blog.likesBy = title;
      //   blog.content = content;
      //   blog.tags = tags;
      return await blog.save();
    } catch (error) {
      logger.error(error);
      throw new Error("Internal Server Error");
    }
  },
};
