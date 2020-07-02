import axios from "axios";

export const SERVER_URL = "http://94.238.22.29:8921/";

export const HTTP = axios.create({
  baseURL: `${SERVER_URL}api`,
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
