import { api } from "./api";

interface ProyectoPayload {
  titulo: string;
  area: string;
  objetivos: string;
  cronograma: string;
  presupuesto: number;
  institucion: string;
  docente: string; // ObjectId del docente
  integrantes: string[]; // ObjectId[] de estudiantes
  observaciones?: string;
  estadoActual?: string; // opcional, el backend usa "Formulación" por defecto
}

export const createProjectAPI = async (proyecto: ProyectoPayload) => {
  try {
    const { data } = await api.post("/projects", proyecto);
    return data;
  } catch (error: any) {
    throw error.response?.data || { msg: "Error al crear proyecto" };
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
