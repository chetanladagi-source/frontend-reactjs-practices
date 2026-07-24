import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 10000,
  withCredentials: true, // Required later for HttpOnly Refresh Token
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
