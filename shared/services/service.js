import axios from "axios";

export const HTTP = axios.create({
  baseURL: "http://94.238.22.29:8921/api",
  headers: {
    "Content-Type": "application/json",
  },
});

HTTP.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return error;
  },
);