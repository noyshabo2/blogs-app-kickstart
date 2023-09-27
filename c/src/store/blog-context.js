import React, { useState, useEffect } from "react";
import { getBlogs } from "../helper";

const blogsData = [
  {
    id: 1,
    title: "Post 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    createAt: "2021-05-01",
    tags: ["tag1", "tag2", "tag3"],
    image:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*jCerKEP1Mscao2j73MTsEw.jpeg",
  },
  {
    id: 2,
    title: "Post 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    createAt: "2021-05-01",
    tags: ["tag1", "tag2", "tag3"],
    image:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*jCerKEP1Mscao2j73MTsEw.jpeg",
  },
];

const BlogContext = React.createContext({
  blogs: [],
  addPost: (blog) => {},
});

export const BlogContextProvider = (props) => {
  const [blogs, setPosts] = useState([]);

  const fetchBlogs = async (filterBy = "") => {
    const data = await getBlogs(filterBy);
    setPosts(data.blogs);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  const addPostHandler = (blog) => {
    setPosts((prevBlog) => {
      return prevBlog.concat(blog);
    });
  };

  const contextValue = {
    blogs: blogs,
    addPost: addPostHandler,
  };

  return (
    <BlogContext.Provider value={contextValue}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
