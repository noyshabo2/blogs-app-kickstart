import React, { useContext } from "react";
import "./blogPreview.scss";
import BlogContext from "../../store/blog-context";

export default function BlogPreview({ blog }) {
  const blogsCtx = useContext(BlogContext);
  return (
    <li className="blog-card">
      <div className="left-content">
        <h3 className="title">{blog.title}</h3>
        <p className="content">{blog.content}</p>
        <div className="footer-container">
          <h2 className="date">
            {new Date(blog.createdAt).toLocaleDateString()}
          </h2>
          <div className="tags-container">
            {blog.tags.map((tag, index) => (
              <span
                className="tag"
                key={tag + index}
                onClick={() => {
                  blogsCtx.addTagHandler(tag);
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <img src={blog.image} width={"20%"} height={100} />
    </li>
  );
}
