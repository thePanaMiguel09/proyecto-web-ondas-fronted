import { api } from "./api";

export const login = async (email: string, password: string) => {
  try {
    const response = await api.post("/auth/login", {
      email: email,
      password: password,
    });

    if (response.status === 200) {
      return response.data;
    }

    if (response.status === 401) {
      return "Contraseña Incorrecta";
    }

    if (response.status === 404) {
      return "Correo no existe";
    }
  } catch (error) {
    return "Error al realizar el login";
  }
};

export const signup = async (data: {
  nombres: string;
  apellidos: string;
  email: string;
  password: string;
  id: string;
  tipoIdentificacion: string;
}) => {
  try {
    const response = await api.post("/auth/signup", data);

    if (response.status === 201) {
      return {
        success: true,
        token: response.data.token,
        usuario: response.data.usuario,
      };
    } else {
      // Cualquier otro código de respuesta inesperado
      return {
        success: false,
        msg: "Respuesta inesperada del servidor",
      };
    }
  } catch (error: any) {
    if (error.response?.status === 401) {
      return {
        success: false,
        msg: error.response.data.msg,
      };
    }

    return {
      success: false,
      msg: "Error interno del cliente",
    };
  }
};
