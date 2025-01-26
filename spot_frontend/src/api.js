import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api"; // Replace with deployed backend URL

export const api = axios.create({
  baseURL: BASE_URL,
});

export const loginUser = (data) => api.post("/users/login/", data); // Add login endpoint
export const registerUser = (data) => api.post("/users/", data);
