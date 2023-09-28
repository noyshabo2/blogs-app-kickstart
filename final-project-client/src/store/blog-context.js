import React, { useState, useEffect } from "react";
import { getBlogs, addBlog } from "../helper";

const BlogContext = React.createContext({
  isAddModalOpen: false,
  blogs: [],
  addPost: (blog) => {},
  currTags: [],
  addTagHandler: (newTags) => {},
});

export const BlogContextProvider = (props) => {
  const [blogs, setPosts] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currTags, setCurrTags] = useState([]);

  const fetchBlogs = async (newTags) => {
    const data = await getBlogs(newTags);
    console.log(data);
    setPosts(data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const addTagHandler = (newTags) => {
    if (typeof newTags === "string") newTags = [newTags];
    setCurrTags(newTags);
    fetchBlogs(newTags);
  };

  const addBlogHandler = async (blog) => {
    const newBlog = await addBlog(blog);
    setPosts((prevBlog) => {
      return prevBlog.concat(newBlog);
    });
  };

  const openAddModalHandler = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModalHandler = () => {
    setIsAddModalOpen(false);
  };

  const contextValue = {
    blogs: blogs,
    addBlog: addBlogHandler,
    isAddModalOpen: isAddModalOpen,
    openAddModal: openAddModalHandler,
    closeAddModal: closeAddModalHandler,
    addTagHandler: addTagHandler,
    currTags: currTags,
    fetchBlogs: fetchBlogs,
  };

  return (
    <BlogContext.Provider value={contextValue}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
