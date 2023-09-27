const { Router } = require("express");
const { blogController } = require("./blog-controller");

const blogRouter = new Router();
blogRouter.post("/", blogController.addBlog);
blogRouter.get("/:id", blogController.getBlogById);
blogRouter.get("/", blogController.getAllBlogs);

module.exports = blogRouter;
