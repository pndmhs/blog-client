import axios from "axios";

const API_URL = "http://localhost:3000";

const getUserData = () => JSON.parse(localStorage.getItem("user"));

export const authUser = async (loginData) => {
  const response = await axios.post(`${API_URL}/users/auth`, loginData);
  return response.data;
};

export const fetchAllPost = async () => {
  const response = await axios.get(`${API_URL}/posts`);
  return response.data;
};

export const fetchPost = async (post_id) => {
  const response = await axios.get(`${API_URL}/posts/${post_id}`);
  return response.data;
};

export const fetchAllComments = async (post_id) => {
  const response = await axios.get(`${API_URL}/posts/${post_id}/comments`);
  return response.data;
};

export const addPost = async (newPost) => {
  const user = getUserData();
  const response = await axios.post(`${API_URL}/posts`, newPost, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });

  return response.data;
};

export const updatePost = async (post_id, newData) => {
  const user = getUserData();
  const response = await axios.put(`${API_URL}/posts/${post_id}`, newData, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });

  return response.data;
};

export const deletePost = async (post_id) => {
  const user = getUserData();
  await axios.delete(`${API_URL}/posts/${post_id}`, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
};

export const addComment = async (post_id, formData) => {
  const response = await axios.post(
    `${API_URL}/posts/${post_id}/comments`,
    formData,
  );

  return response.data;
};

export const deleteComment = async (post_id, comment_id) => {
  const user = getUserData();
  await axios.delete(`${API_URL}/posts/${post_id}/comments/${comment_id}`, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
};
