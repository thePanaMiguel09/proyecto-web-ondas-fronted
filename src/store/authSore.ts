import { create } from "zustand";

interface Usuario {
  id: string;
  email: string;
  rol: "ESTUDIANTE" | "DOCENTE" | "COORDINADOR" | "PENDIENTE" | "SUPERADMIN";
}

interface AuthState {
  token: string | null;
  usuario: Usuario | null;
  login: (token: string, usuario: Usuario) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
}

const tokenFromStorage = localStorage.getItem("token");
const userFromStorage = localStorage.getItem("usuario");

export const useAuthStore = create<AuthState>((set, get) => ({
  token: tokenFromStorage,
  usuario: userFromStorage ? JSON.parse(userFromStorage) : null,

  login: (token, usuario) => {
    localStorage.setItem("token", token);
    localStorage.setItem("usuario", JSON.stringify(usuario));
    set({ token, usuario });
  },
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    set({ token: null, usuario: null });
  },
  isAuthenticated: () => {
    const { token, usuario } = get();
    return Boolean(token && usuario?.id && usuario?.email);
  },
}));
