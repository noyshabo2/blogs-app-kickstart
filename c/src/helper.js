import blogService from "./services/blogService";

export const saveBlog = (blog) => {
  return blogService.post("blogs", blog);
};

export const getBlog = (id) => {
  return blogService.get(`blogs/${id}`);
};

export const getBlogs = (data) => {
  return blogService.get("blogs", data);
};

// export const getBlogs = () => {
//   return blogService.get("blogs", data);
// };
