import { api } from "./api";
import type { User, UserClass } from "../Interfaces/User";

export const getUser = async (id: string): Promise<UserClass | null> => {
  try {
    const { data } = await api.get<User>(`/users/${id}`);
    if (data && data.user) {
      return data.user;
    }
    return null;
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    return null;
  }
};

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
