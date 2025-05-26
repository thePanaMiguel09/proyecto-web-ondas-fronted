// src/features/Estudiante/types.ts
export interface Project {
  id: string;
  title: string;
  subject: string;
  description: string;
  status: "Pendiente" | "En curso" | "Completado";
  deadline: string;
  teacher: string;
}

export interface Advance {
  id: string;
  projectId: string;
  description: string;
  date: string;
  file: File[];
  createdAt: Date;
  progress?: number;
}
