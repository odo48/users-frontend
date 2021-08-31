import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

const getUsers = async () => {
  return axios
    .get(`${API_BASE}/users`)
    .then((response) => {
      return response.data;
    })
    .catch(() => false);
};

const getUserData = async (id) => {
  return axios
    .get(`${API_BASE}/users/${id}/details`)
    .then((response) => {
      return response.data;
    })
    .catch(() => false);
};

const getCommentsByPost = async (id) => {
  return axios
    .get(`${API_BASE}/comments/post/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch(() => false);
};

const api = {
  users: {
    getUsers,
    getUserData,
  },
  comments: {
    getCommentsByPost,
  },
};

export default api;
