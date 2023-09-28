const blogService = require("./blog-service");
const logger = require("../../helpers/winston");
const path = require("path");
var bodyParser = require("body-parser");
const { log } = require("console");
const jsonParser = bodyParser.json();

exports.blogController = {
  async addBlog(req, res) {
    logger.info(`[addBlog] - ${path.basename(__filename)}`);
    try {
      const { title, content, tags, image } = req.body;
      const blog = await blogService.addBlog(title, content, tags, image);
      res.status(201).json({
        message: "Blog created successfully",
        blog,
      });
    } catch (error) {
      logger.error(error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  async getAllBlogs(req, res) {
    logger.info(`[getAllBlogs] - ${path.basename(__filename)}`);
    try {
      const { tags } = req.query;
      logger.info(`[getAllBlogs] - ${tags} ${typeof tags}`);
      const filterByTags = tags ? Object.values(tags) : null;
      const blogs = await blogService.getAllBlogs(filterByTags);
      res.status(200).json({
        blogs,
      });
    } catch (error) {
      logger.error(error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  async getBlogById(req, res) {
    logger.info(`[getBlogById] - ${path.basename(__filename)}`);
    try {
      const { id } = req.params;
      const blog = await blogService.getBlogById(id);
      res.status(200).json({
        blog,
      });
    } catch (error) {
      logger.error(error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
};
