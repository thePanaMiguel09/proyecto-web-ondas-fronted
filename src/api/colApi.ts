import { api } from "./api";

export const getColegios = async () => {
  const res = await api.get("/colegios");
  return res.data;
};

export const createColegio = async (colegio: any) => {
  const res = await api.post("/colegios", colegio);
  return res.data;
};

export const updateColegio = async (id: string, colegio: any) => {
  const res = await api.put(`/colegios/${id}`, colegio);
  return res.data;
};

export const deleteColegio = async (id: string) => {
  const res = await api.delete(`/colegios/${id}`);
  return res.data;
};