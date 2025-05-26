import { useEffect, useState } from "react";

import CrearProyectoModal from "../Modals/CreateProjectModal";

import { useAuthStore } from "../../../../store/authSore";

import { getUser } from "../../../../api/getUser";
import { getUsersByRol } from "../../../../api/getUsersByRol";

import type { UserClass } from "../../../../Interfaces/User";
import { getInstituciones } from "../../../../api/getInstitutions";

export default function TarjetaCrearProyecto() {
  const { usuario } = useAuthStore();
  const id = usuario?.id;
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const [docente, setDocente] = useState<UserClass | null>(null);

  const [estudiantes, setEstudiantes] = useState<
    { id: string; nombre: string }[]
  >([]);

  const [instituciones, setInstituciones] = useState<
    { _id: string; nameInstitute: string }[]
  >([]);

  useEffect(() => {
    const fetchInstituciones = async () => {
      const data = await getInstituciones(); // Debes implementar este endpoint
      setInstituciones(data);
    };

    fetchInstituciones();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      // Obtener el docente
      if (id) {
        const data = await getUser(id);
        if (data) {
          setDocente(data);
        }
      }

      // Obtener los estudiantes por rol
      const estudiantesAPI = await getUsersByRol("ESTUDIANTE");

      const estudiantesFormateados = estudiantesAPI.map((e) => ({
        id: e._id,
        nombre: `${e.nombres} ${e.apellidos}`,
      }));

      setEstudiantes(estudiantesFormateados);
    };

    fetchData();
  }, [id]);

  console.log(docente);

  const handleCreateProyecto = (data: any) => {
    console.log("Proyecto creado:", data);
    setModalOpen(false); // cerrar modal después de crear
    // Aquí puedes agregar lógica para guardar el proyecto en tu backend o estado global
  };

  return (
    <>
      <div className="bg-[#1e293b] p-6 rounded-lg border border-gray-700 flex flex-col justify-evenly">
        <div className="flex items-center justify-between mb-2">
          <span className="text-blue-400 text-sm font-semibold">Gestión</span>
          <span className="text-blue-400 text-xl"></span>
        </div>
        <h3 className="text-lg font-bold mb-1">Crear Proyectos</h3>
        <p className="text-sm text-gray-400 mb-4">
          Crea nuevos proyectos, asigna estudiantes y demás información
        </p>
        <button
          onClick={handleOpenModal}
          className="bg-blue-600 hover:bg-blue-700 w-full py-2 rounded-md font-semibold"
        >
          Crear Proyecto →
        </button>
      </div>

      <CrearProyectoModal
        open={modalOpen}
        onClose={handleCloseModal}
        onCreate={handleCreateProyecto}
        estudiantes={estudiantes}
        docenteId={docente?._id!}
        instituciones={instituciones}
      />
    </>
  );
}
