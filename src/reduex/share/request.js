import axios from "axios";

export const axiosInstance = axios.create({
  //baseURL: " http://localhost:3001",
  baseURL: "http://15.165.210.67:8080",
});
