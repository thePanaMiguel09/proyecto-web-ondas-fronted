import { api } from "./api";

export const getUsers = async () => {
  const res = await api.get("/usuarios");
  return res.data;
};

export const createUser = async (user: any) => {
  const res = await api.post("/usuarios", user);
  return res.data;
};

export const updateUser = async (id: string, user: any) => {
  const res = await api.patch(`/usuarios/${id}`, user);
  return res.data;
};

export const deleteUser = async (id: string) => {
  const res = await api.delete(`/usuarios/${id}`);
  return res.data;
};