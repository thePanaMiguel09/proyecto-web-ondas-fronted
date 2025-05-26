//Tarjetas
import type { Project } from "../types";

// interface Project {
//   id: number;
//   title: string;
//   subject: string;
//   description: string;
//   status: "Pendiente" | "En curso" | "Completado";
//   deadline: string;
//   teacher: string;
// }

interface ProjectCardProps {
  project: Project;
  onAddProgress: () => void;
  onShowDetails: () => void;
}

export default function ProjectCard({
  project,
  onAddProgress,
  onShowDetails,
}: ProjectCardProps) {
  return (
    <div className="bg-[#1e293b] p-6 rounded-2xl border border-gray-700 flex flex-col justify-between shadow-lg">
      <header className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <span className="text-sm text-gray-400">
            Materia: {project.subject}
          </span>
        </div>
        <span
          className={`
            px-2 py-1 text-xs font-semibold rounded-full
            ${project.status === "Pendiente" ? "bg-yellow-500 text-black" : ""}
            ${project.status === "En curso" ? "bg-primary text-white" : ""}
            ${project.status === "Completado" ? "bg-green-600 text-white" : ""}
            `}
        >
          {project.status}
        </span>
      </header>

      <p className="text-sm text-gray-300 mb-4 flex-1">{project.description}</p>

      <footer className="flex items-center justify-between">
        <button
          onClick={onShowDetails}
          className="
            flex items-center gap-2
            text-sm font-semibold
            px-4 py-2 rounded-lg
            border border-primary
            text-primary
            hover:bg-primary/10
            transition
            "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
            />
          </svg>
          Detalles
        </button>
        <button
          onClick={onAddProgress}
          className="text-sm bg-primary hover:bg-secondary px-4 py-2 rounded-lg font-semibold transition"
        >
          + Agregar avance
        </button>
      </footer>
    </div>
  );
}
