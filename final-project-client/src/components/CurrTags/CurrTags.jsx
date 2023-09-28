import React, { useContext, useState } from "react";
import "./currTags.scss";
import BlogContext from "../../store/blog-context";
export default function CurrTags() {
  const blogsCtx = useContext(BlogContext);
  const [searchTags, setSearchTags] = useState("");

  const handelSearchTags = (e) => {
    if (!searchTags) blogsCtx.fetchBlogs("");
    else {
      blogsCtx.addTagHandler(searchTags.split(","));
    }
  };

  return (
    <div className="tags-search">
      <input
        type="search"
        placeholder="Search..."
        onChange={(e) => setSearchTags(e.target.value)}
        value={searchTags}
      />
      <button onClick={handelSearchTags}>🔍</button>
      {blogsCtx.currTags.length !== 0 && (
        <div className="curr-tags">
          CurrTags: {blogsCtx.currTags.join(", ")}
        </div>
      )}
    </div>
  );
}
