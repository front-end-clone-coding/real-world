import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: " http://localhost:3001",
  //baseURL: "http://13.124.68.236:8080",
});
