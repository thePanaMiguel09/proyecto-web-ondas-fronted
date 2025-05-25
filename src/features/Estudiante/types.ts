// src/features/Estudiante/types.ts
export interface Project {
    id: number;
    title: string;
    subject: string;
    description: string;
    status: 'Pendiente' | 'En curso' | 'Completado';
    deadline: string;
    teacher: string;
}

export interface Advance {
    id: number;
    projectId: number;
    description: string;
    date: string;
    files: File[];
    createdAt: Date;
    progress?: number;
}