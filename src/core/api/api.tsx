import axios from "axios";

export const api = axios.create({
  baseURL: "https://web-backend-production-365b.up.railway.app/api",
});
