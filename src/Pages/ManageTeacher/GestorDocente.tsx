import { useAuthStore } from "../../store/authSore";
import { useNavigate } from "react-router-dom";
import TarjetaCrearProyecto from "./Components/Cards/CreateProject";
import ViewProjects from "./Components/Cards/ViewProjects";

function GestorDocente() {
  const { usuario, logout } = useAuthStore();
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1e293b] p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold text-blue-400">EducaTE</h1>
          <p className="text-sm text-gray-400">Panel de {usuario?.rol}</p>

          <nav className="mt-10">
            <button className="w-full text-left py-2 px-4 bg-blue-600 rounded-md text-white font-semibold hover:bg-blue-700">
              Gestión de Proyectos
            </button>
          </nav>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold" />
            <div>
              <p className="text-sm font-semibold">{usuario?.email}</p>
              <p className="text-xs text-gray-400">Coordinador</p>
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

      {/* Contenido principal */}
      <main className="flex-1 p-10">
        <h2 className="text-3xl font-bold mb-2">Gestión de Proyectos</h2>
        <p className="text-gray-400 mb-8">
          Administra los proyectos de tus estudiantes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Tarjeta Crear Usuario */}
          <TarjetaCrearProyecto />
          <ViewProjects />
        </div>
      </main>
    </div>
  );
}

export default GestorDocente;
