import { useState, useMemo, useEffect } from "react";
import AddProgressModal from "../Components/ModalAdd";
import ProjectCard from "../Components/ProjectCard";
import ModalDetails from "../Components/ModalDetails";
import { type Project, type Advance } from "../types";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../store/authSore";
import { getProjectsByEstudiante } from "../../../api/getProjectsByEstudiante";

export default function DashboardEs() {
  const navigate = useNavigate();
  const { usuario, logout } = useAuthStore();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (!usuario?.id) return;

    const fetchProjects = async () => {
      try {
        const data = await getProjectsByEstudiante(usuario.id);
        console.log("Respuesta de la API:", data);

        const mappedProjects: Project[] = data.proyectos.map((p: any) => ({
          id: p._id,
          title: p.titulo,
          subject: p.area,
          description: p.objetivos,
          status: p.estadoActual,
          deadline: "Sin fecha",
          teacher: `${p.docente.nombres} ${p.docente.apellidos}`,
        }));

        setProjects(mappedProjects);
      } catch (error) {
        console.error("Error al cargar proyectos:", error);
      }
    };

    fetchProjects();
  }, [usuario]);

  // Tus proyectos

  // Estado de búsqueda por materia
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrar proyectos según searchTerm (por subject)
  const filteredProjects = useMemo(
    () =>
      projects.filter((p) =>
        p.subject.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm]
  );

  const [advances, setAdvances] = useState<Advance[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingAdvance, setEditingAdvance] = useState<Advance | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Crear o actualizar avance
  const handleSaveAdvance = (data: Omit<Advance, "id" | "createdAt">) => {
    if (editingAdvance) {
      // Actualizar existente
      setAdvances((prev) =>
        prev.map((a) =>
          a.id === editingAdvance.id
            ? {
                ...a,
                description: data.description,
                date: data.date,
                files: data.file,
              }
            : a
        )
      );
    } else {
      // Nuevo avance
      const newAdv: Advance = {
        ...data,
        id: String(advances.length + 1),
        createdAt: new Date(),
      };
      setAdvances((prev) => [...prev, newAdv]);
    }
    // reset
    setEditingAdvance(null);
    setShowAddModal(false);
  };

  // Editar avance: abre modal con datos precargados
  const handleEditAdvance = (adv: Advance) => {
    setEditingAdvance(adv);
    setSelectedProject(projects.find((p) => p.id === adv.projectId) ?? null);
    setShowAddModal(true);
  };

  // Eliminar avance
  const handleDeleteAdvance = (id: string) => {
    setAdvances((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white font-sans">
      {/* Modal Agregar/Editar Avance */}
      <AddProgressModal
        isOpen={showAddModal}
        onClose={() => {
          setShowAddModal(false);
          setEditingAdvance(null);
        }}
        projectId={selectedProject?.id!}
        onSave={handleSaveAdvance}
        initialData={editingAdvance ?? undefined}
      />

      {/* Detalles + Gestor de avances */}
      <ModalDetails
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
        project={selectedProject}
        advances={advances.filter((a) => a.projectId === selectedProject?.id)}
        onNewAdvance={() => {
          setEditingAdvance(null);
          setShowAddModal(true);
        }}
        onDeleteAdvance={handleDeleteAdvance}
        onEditAdvance={handleEditAdvance}
      />

      {/* Sidebar (sin cambios) */}
      <aside className="w-64 bg-[#1e293b] p-6 pb-2 flex flex-col justify-between">
        <div className="mt-10 mb-12">
          <p className="text-sm text-gray-400">Panel de {usuario?.rol}</p>
          <nav className="mt-8">
            <button className="w-full text-left py-2 px-4 bg-blue-600 rounded-md text-white font-semibold hover:bg-blue-700">
              Gestión de Proyectos
            </button>
          </nav>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold">
              AG
            </div>
            <div>
              <p className="text-sm font-semibold">{usuario?.email}</p>
              <p className="text-xs text-gray-400">{usuario?.rol}</p>
            </div>
          </div>
          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="mt-4 w-full text-sm bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-md"
          >
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-10 pt-20 overflow-y-auto">
        <header className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-semibold">Mis Proyectos</h2>
          <input
            type="text"
            placeholder="Buscar por materia..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded-md bg-[#0f172a] border border-gray-600 placeholder-gray-500 text-sm focus:outline-none"
          />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <ProjectCard
              key={proj.id}
              project={proj}
              onAddProgress={() => {
                setSelectedProject(proj);
                setShowAddModal(true);
              }}
              onShowDetails={() => {
                setSelectedProject(proj);
                setShowDetails(true);
              }}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
