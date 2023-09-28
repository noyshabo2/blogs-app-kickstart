import React, { useContext } from "react";
import "./blogList.scss";
import BlogPreview from "../BlogPreview/BlogPreview";
import BlogContext from "../../store/blog-context";
export default function BlogList() {
  const blogsCtx = useContext(BlogContext);
  return (
    <section className="blog-list">
      <ul>
        {blogsCtx.blogs.map((blog) => (
          <BlogPreview key={blog._id} blog={blog} />
        ))}
      </ul>
    </section>
  );
}
