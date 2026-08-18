import axios from "axios";

const api = axios.create({
  baseURL: " https://affilatebackend-lku2.onrender.com",
});

export default api;