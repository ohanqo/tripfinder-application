import axios from "axios";
import { AUHTENTICATION_TOKEN } from "../constants/Preferences";
import * as SecureStore from "expo-secure-store";

export const SERVER_URL = "http://94.238.22.29:8921/";

export const HTTP = axios.create({
  baseURL: `${SERVER_URL}api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const AUTH_HTTP = axios.create({
  baseURL: `${SERVER_URL}api`,
  headers: {
    "Content-Type": "application/json",
  },
});

AUTH_HTTP.interceptors.response.use(
  (response) => response.data,
  (error) => error,
);

AUTH_HTTP.interceptors.request.use(
  async (request) => {
    const token = await SecureStore.getItemAsync(AUHTENTICATION_TOKEN);
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    return error;
  },
);

HTTP.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return error;
  },
);


