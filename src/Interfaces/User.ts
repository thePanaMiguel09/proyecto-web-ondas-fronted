export interface User {
  user: UserClass;
}

export interface UserClass {
  _id: string;
  nombres: string;
  apellidos: string;
  tipoIdentificacion: string;
  numeroIdentificacion: string;
  email: string;
  rol: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
