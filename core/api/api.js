import axios from "axios";

export const api = axios.create({
  //No usar por ahora debido a que lo tengo en mi local, es decir
  //esto el endpoint no se podrá consumir hasta que sea desplegado
  baseURL: "http://localhost:3000/",
});
