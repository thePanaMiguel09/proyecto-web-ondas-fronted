// types/ProyectoForm.ts
export interface ProyectoFormData {
  titulo: string;
  area: string;
  objetivos: string;
  cronograma: string;
  presupuesto: number;
  institucion: string;
  integrantes: { id: string }[];
  observaciones?: string;
  estadoActual:
    | "Formulación"
    | "Evaluación"
    | "Activo"
    | "Inactivo"
    | "Finalizado";
}
