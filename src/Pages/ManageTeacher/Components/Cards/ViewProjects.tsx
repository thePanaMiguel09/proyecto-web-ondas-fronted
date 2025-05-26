import { useEffect, useState } from "react";
import { useAuthStore } from "../../../../store/authSore";
import ViewProjects from "../Modals/ViewProjectsModal";
import { getUser } from "../../../../api/getUser";

export default function TarjetaVerProyectos() {
  const { usuario } = useAuthStore();
  const id = usuario?.id;
  const [modalOpen, setModalOpen] = useState(false);
  const [docenteId, setDocenteId] = useState<string>("");

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  useEffect(() => {
    const fetchDocente = async () => {
      if (id) {
        const data = await getUser(id);
        if (data) setDocenteId(data._id);
      }
    };

    fetchDocente();
  }, [id]);

  return (
    <>
      <div className="bg-[#1e293b] p-6 rounded-lg border border-gray-700 flex flex-col justify-evenly">
        <div className="flex items-center justify-between mb-2">
          <span className="text-blue-400 text-sm font-semibold">Proyectos</span>
        </div>
        <h3 className="text-lg font-bold mb-1">Ver mis Proyectos</h3>
        <p className="text-sm text-gray-400 mb-4">
          Visualiza los proyectos en los que estás registrado como docente.
        </p>
        <button
          onClick={handleOpenModal}
          className="bg-green-600 hover:bg-green-700 w-full py-2 rounded-md font-semibold"
        >
          Ver Proyectos →
        </button>
      </div>

      {docenteId && (
        <ViewProjects
          open={modalOpen}
          onClose={handleCloseModal}
          docenteId={docenteId}
        />
      )}
    </>
  );
}
