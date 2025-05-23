// services/auth.ts
import { api } from "../../api/api";

export const login = async (email: string, password: string) => {
  try {
    const response = await api.post("/auth/login", { email, password });

    return { success: true, data: response.data };
  } catch (error: any) {
    const message = error.response?.data?.msg || "Error al iniciar sesión";
    return { success: false, error: message };
  }
};
