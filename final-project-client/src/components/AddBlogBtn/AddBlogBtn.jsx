import React, { useContext } from "react";
import "./addBlogBtn.scss";
import BlogContext from "../../store/blog-context";
export default function AddBlogBtn() {
  const blogCtx = useContext(BlogContext);
  return (
    <button className="add-btn" onClick={blogCtx.openAddModal}>
      <span>+</span>
    </button>
  );
}
