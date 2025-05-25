import type { UserClass } from "../Interfaces/User";
import { api } from "./api";

// ejemplo en el front
export const getUsersByRol = async (rol: string): Promise<UserClass[]> => {
  try {
    const { data } = await api.get<{ users: UserClass[] }>(`/users/rol/${rol}`);
    return data.users;
  } catch (error) {
    console.error("Error al obtener usuarios por rol:", error);
    return [];
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
