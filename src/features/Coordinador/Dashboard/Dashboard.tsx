import React, { useState } from 'react';
import {
  FaUserPlus,
  FaEdit,
  FaSchool,
  FaTools,
  FaFolderOpen
} from 'react-icons/fa';
import { Dialog } from '@mui/material';
import UserFormModal from './components/UserFormModal';
import UserTable from './components/UserTable';
import ColForm from './components/ColForm';
import ColTable from './components/ColTable';
import ProTable from './components/ProTable';
import UserManagement from './components/UserManagement';

interface User {
  id: number;
  name: string;
  role: string;
}

interface Colegio {
  id: number;
  nombre: string;
  direccion: string;
}

interface Proyecto {
  id: number;
  nombre: string;
  direccion: string;
}

export default function Dashboard() {
  const [seccion, setSeccion] = useState<'usuarios' | 'proyectos' | 'colegios'>('usuarios');

  // USUARIOS
  const [users, setUsers] = useState<User[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isTableOpen, setIsTableOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | undefined>(undefined);

  const handleSaveUser = (userData: { name: string; role: string }) => {
    if (editingUser) {
      setUsers(users.map((u) => (u.id === editingUser.id ? { ...u, ...userData } : u)));
      setEditingUser(undefined);
    } else {
      const newUser = {
        id: users.length + 1,
        ...userData,
      };
      setUsers([...users, newUser]);
    }
    setIsFormOpen(false);
  };

  // PROYECTOS
  const [projects, setProjects] = useState([
    { id: 1, name: 'Proyecto Alpha', status: 'Activo' },
    { id: 2, name: 'Proyecto Beta', status: 'Pendiente' }
  ]);
  const [isProTableOpen, setIsProTableOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | undefined>(undefined);

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
  };

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter((p) => p.id !== id));
  };
    const handleDeleteUser = (id: number) => {
      setUsers(users.filter((u) => u.id !== id));
    };

    const handleEditFromTable = (user: User) => {
      setEditingUser(user);
      setIsFormOpen(true);
    };

  // COLEGIOS
  const [colegios, setColegios] = useState<Colegio[]>([]);
  const [isColFormOpen, setIsColFormOpen] = useState(false);
  const [isColTableOpen, setIsColTableOpen] = useState(false);
  const [editingColegio, setEditingColegio] = useState<Colegio | undefined>(undefined);

  const handleSaveColegio = (colegioData: { nombre: string; direccion: string }) => {
    if (editingColegio) {
      setColegios(colegios.map((c) => (c.id === editingColegio.id ? { ...c, ...colegioData } : c)));
      setEditingColegio(undefined);
    } else {
      const newColegio = {
        id: colegios.length + 1,
        ...colegioData,
      };
      setColegios([...colegios, newColegio]);
    }
    setIsColFormOpen(false);
  };

  const handleDeleteColegio = (id: number) => {
    setColegios(colegios.filter((c) => c.id !== id));
  };

  const handleEditColegio = (colegio: Colegio) => {
    setEditingColegio(colegio);
    setIsColFormOpen(true);
  };

  
  
  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1e293b] p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold text-blue-400 mt-3">EducaTE</h1>
          <p className="text-sm text-gray-400">Panel de Coordinador</p>

          <nav className="mt-10 flex flex-col gap-4">
            <button
              onClick={() => setSeccion('usuarios')}
              className={`flex items-center gap-3 py-3 px-4 rounded-lg font-semibold transition transform hover:scale-105 ${seccion === 'usuarios' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
            >
              <FaUserPlus className="text-white text-lg" />
              Gestión de Usuarios
            </button>

            <button
              onClick={() => setSeccion('proyectos')}
              className={`flex items-center gap-3 py-3 px-4 rounded-lg font-semibold transition transform hover:scale-105 ${seccion === 'proyectos' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
            >
              <FaFolderOpen className="text-white text-lg" />
              Visualizar Proyectos
            </button>

            <button
              onClick={() => setSeccion('colegios')}
              className={`flex items-center gap-3 py-3 px-4 rounded-lg font-semibold transition transform hover:scale-105 ${seccion === 'colegios' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
            >
              <FaSchool className="text-white text-lg" />
              Gestión de Colegios
            </button>
          </nav>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold">AG</div>
            <div>
              <p className="text-sm font-semibold">Gestor como Coordinador</p>
              <p className="text-xs text-gray-400">Coordinador</p>
            </div>
          </div>
          <button className="mt-4 w-full text-sm bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-md">
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Contenido principal */}
    <main className="flex-1 px-4 sm:px-6 lg:px-10 py-10 flex flex-col items-center justify-center">
  {/* Sección usuarios */}
  {seccion === 'usuarios' && (
    <>
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">Gestión de Usuarios</h2>
      <p className="text-gray-400 mb-8 text-center text-sm sm:text-base">Administre los usuarios del sistema</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 w-full max-w-6xl">
        {/* Tarjeta: Crear Usuario */}
        <div className="bg-[#1e293b] p-6 md:p-10 rounded-xl border border-gray-700 shadow-xl text-center">
          <div className="bg-blue-900 p-4 rounded-xl inline-block mb-4">
            <FaUserPlus className="text-blue-400 text-3xl sm:text-4xl" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Crear Usuario</h3>
          <p className="text-sm text-gray-400 mb-6">Registre nuevos usuarios en el sistema con roles específicos</p>
          <button
            onClick={() => {
              setEditingUser(undefined);
              setIsFormOpen(true);
            }}
            className="bg-[#3A7BFF] hover:bg-blue-700 w-full py-3 rounded-md font-semibold"
          >
            Crear Usuario →
          </button>
        </div>

        {/* Tarjeta: Editar Usuario */}
        <div className="bg-[#1e293b] p-6 md:p-10 rounded-xl border border-gray-700 shadow-xl text-center">
          <div className="bg-purple-900 p-4 rounded-xl inline-block mb-4">
            <FaEdit className="text-purple-400 text-3xl sm:text-4xl" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Editar Usuario</h3>
          <p className="text-sm text-gray-400 mb-6">Modifique la información y permisos de los usuarios existentes</p>
          <button
            onClick={() => setIsTableOpen(true)}
            className="bg-[#7B61FF] hover:bg-purple-700 w-full py-3 rounded-md font-semibold"
          >
            Editar Usuario →
          </button>
        </div>
      </div>
    </>
  )}

  {/* Sección proyectos */}
  {seccion === 'proyectos' && (
    <>
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">Visualizar Proyectos</h2>
      <p className="text-gray-400 mb-8 text-center text-sm sm:text-base">Modifique el estado de los proyectos</p>
      <div className="bg-[#1e293b] p-6 md:p-10 rounded-xl border border-gray-700 shadow-xl w-full max-w-xl text-center">
        <div className="bg-green-900 p-4 rounded-xl inline-block mb-4">
          <FaFolderOpen className="text-green-400 text-3xl sm:text-4xl" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold mb-2">Visualizar Proyectos</h3>
        <p className="text-sm text-gray-400 mb-6">Cambie de estado los proyectos existentes.</p>
        <button
          onClick={() => setIsProTableOpen(true)}
          className="bg-[#2DCC70] hover:bg-green-700 py-3 w-full rounded-md font-semibold"
        >
          Ver Proyectos →
        </button>
      </div>
    </>
  )}

  {/* Sección colegios */}
  {seccion === 'colegios' && (
    <>
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">Gestión de Colegios</h2>
      <p className="text-gray-400 mb-8 text-center text-sm sm:text-base">Administre la información de los colegios asociados</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 w-full max-w-6xl">
        {/* Agregar Colegio */}
        <div className="bg-[#1e293b] p-6 md:p-10 rounded-xl border border-gray-700 shadow-xl text-center">
          <div className="bg-purple-900 p-4 rounded-xl inline-block mb-4">
            <FaSchool className="text-purple-400 text-3xl sm:text-4xl" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Agregar Colegio</h3>
          <p className="text-sm text-gray-400 mb-6">Registre nuevos colegios al sistema</p>
          <button
            onClick={() => {
              setEditingColegio(undefined);
              setIsColFormOpen(true);
            }}
            className="bg-[#7B61FF] hover:bg-purple-700 py-3 w-full rounded-md font-semibold"
          >
            Crear Colegio →
          </button>
        </div>

        {/* Gestionar Colegio */}
        <div className="bg-[#1e293b] p-6 md:p-10 rounded-xl border border-gray-700 shadow-xl text-center">
          <div className="bg-red-900 p-4 rounded-xl inline-block mb-4">
            <FaTools className="text-red-400 text-3xl sm:text-4xl" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Gestionar Colegios</h3>
          <p className="text-sm text-gray-400 mb-6">Edite o elimine colegios existentes</p>
          <button
            onClick={() => setIsColTableOpen(true)}
            className="bg-[#FF4B4B] hover:bg-red-600 py-3 w-full rounded-md font-semibold"
          >
            Gestionar Colegios →
          </button>
        </div>
      </div>
    </>
  )}

        {/* Modal Usuario */}
        <UserFormModal
          open={isFormOpen}
          onClose={() => {
            setIsFormOpen(false);
            setEditingUser(undefined);
          }}
          onSave={handleSaveUser}
          initialData={editingUser}
        />

        <Dialog open={isTableOpen} onClose={() => setIsTableOpen(false)} maxWidth="md" fullWidth>
          <div className="bg-[#1e293b] text-white p-6 rounded-md">
            <h2 className="text-xl font-bold mb-4 text-blue-400">Usuarios del Sistema</h2>
            <UserTable users={users} onEdit={handleEditFromTable} onDelete={handleDeleteUser} />
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsTableOpen(false)}
                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cerrar
              </button>
            </div>
          </div>
        </Dialog>

        {/* Modal Colegio */}
        <ColForm
          open={isColFormOpen}
          onClose={() => {
            setIsColFormOpen(false);
            setEditingColegio(undefined);
          }}
          onSave={handleSaveColegio}
          initialData={editingColegio}
        />

        <Dialog open={isColTableOpen} onClose={() => setIsColTableOpen(false)} maxWidth="md" fullWidth>
          <div className="bg-[#1e293b] text-white p-6 rounded-md">
            <h2 className="text-xl font-bold mb-4 text-purple-400">Colegios Registrados</h2>
            <ColTable colegios={colegios} onEdit={handleEditColegio} onDelete={handleDeleteColegio} />
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsColTableOpen(false)}
                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cerrar
              </button>
            </div>
          </div>
        </Dialog>
        {/* Tabla de Proyectos */}
        <Dialog open={isProTableOpen} onClose={() => setIsProTableOpen(false)} maxWidth="md" fullWidth>
          <div className="bg-[#0f172a] p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-blue-400">Lista de Proyectos</h2>
            <ProTable
              projects={projects}
              onEdit={handleEditProject}
              onDelete={handleDeleteProject}
            />
            <div className="text-right mt-4">
              <button
                onClick={() => setIsProTableOpen(false)}
                className="mt-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded"
              >
                Cerrar
              </button>
            </div>
          </div>
        </Dialog>
      </main>
    </div>
  );
}













