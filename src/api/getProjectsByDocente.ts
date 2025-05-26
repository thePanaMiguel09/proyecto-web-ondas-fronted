import { api } from "./api";

export const getProjectsByDocente = async (
  docenteId: string,
  
) => {
  try {
    const response = await api.get(`/projects/by-docente/${docenteId}`);
    return response.data.proyectos;
  } catch (error) {
    console.error("Error al obtener proyectos del docente", error);
    throw error;
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
