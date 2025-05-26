import { api } from "./api";

interface CreateAdvanceData {
  descripcion: string;
  file: File[];
}

export const createAdvance = async (
  id: string,
  advanceData: CreateAdvanceData
) => {
  try {
    const formData = new FormData();
    formData.append("descripcion", advanceData.descripcion);

    advanceData.file.forEach((file) => {
      formData.append("file", file); // nombre que espera Multer
    });

    const response = await api.post(`projects/advances/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // 👈 necesario
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error al crear avance:", error);
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
