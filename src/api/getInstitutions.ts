import { api } from "./api";

export async function getInstituciones() {
  try {
    const token = localStorage.getItem("token"); // o como lo guardes
    const response = await api.get("/institutions", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data;
  } catch (error) {
    console.error("Error al obtener instituciones: ", error);
    throw error;
  }
}

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
