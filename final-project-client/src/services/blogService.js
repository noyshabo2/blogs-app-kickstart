import Axios from "axios";

const BASE_URL = "http://localhost:8080/api";

const axios = Axios.create({
  withCredentials: true,
});

async function ajax(endpoint, method = "GET", data = null) {
  try {
    const res = await axios({
      url: `${BASE_URL}/${endpoint}`,
      method,
      data,
      // query: method === "GET" ? { tags: data } : null,
      params: method === "GET" ? { tags: data } : null,
    });

    return res.data;
  } catch (err) {
    console.log(
      `Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: `,
      data
    );
    console.dir(err);
    if (err.response && err.response.status === 401) {
      sessionStorage.clear();
      window.location.assign("/#/login");
    }
    throw err;
  }
}

const blogService = {
  get(endpoint, data) {
    return ajax(endpoint, "GET", data);
  },
  post(endpoint, data) {
    return ajax(endpoint, "POST", data);
  },
  put(endpoint, data) {
    return ajax(endpoint, "PUT", data);
  },
  delete(endpoint, data) {
    return ajax(endpoint, "DELETE", data);
  },
};

export default blogService;
