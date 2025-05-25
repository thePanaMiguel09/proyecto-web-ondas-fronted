import { api } from "./api";

export const getProyectos = async () => {
  const res = await api.get("/proyectos");
  return res.data;
};

export const createProyecto = async (proyecto: any) => {
  const res = await api.post("/proyectos", proyecto);
  return res.data;
};

export const updateProyecto = async (id: string, proyecto: any) => {
  const res = await api.put(`/proyectos/${id}`, proyecto);
  return res.data;
};

export const deleteProyecto = async (id: string) => {
  const res = await api.delete(`/proyectos/${id}`);
  return res.data;
};