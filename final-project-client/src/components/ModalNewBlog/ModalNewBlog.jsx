import React, { useState, useContext } from "react";
import "./modalNewBlog.scss";
import BlogContext from "../../store/blog-context";

export default function ModalNewBlog() {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const blogCtx = useContext(BlogContext);

  const handelSubmit = (e) => {
    e.preventDefault();
    const blog = { title, tags: tags.split(","), content, image: imageUrl };
    console.log(blog);
    blogCtx.addBlog(blog);
    blogCtx.closeAddModal();
  };

  if (!blogCtx.isAddModalOpen) return;
  return (
    <div className="modal-new-blog">
      <form onSubmit={handelSubmit}>
        <h2>Add New Blog</h2>
        <label onClick={blogCtx.closeAddModal}>X</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          value={title}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <textarea
          className="tags"
          placeholder="Tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image Url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
}
