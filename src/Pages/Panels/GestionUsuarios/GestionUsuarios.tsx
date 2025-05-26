import Card from "../../../Components/CustomCard/CustomCard";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

function GestionUsuarios() {
  return (
    <div className="w-[80%] h-full">
      <div className="w-full h-[10%]">
        <div className="text-4xl font-bold text-white ml-5 mt-5">
          Gestión de Usuarios
        </div>
        <div className="ml-5 mt-1 text-secondary font-light">
          Administra los usuaios de tu institución
        </div>
      </div>
      <div className="w-full h-[90%] flex  flex-wrap justify-center items-center gap-2">
        <Card
          title="Crear Usuarios"
          description="Registre nuevos usuarios en el sistema"
          titleButton="Crear Usuario"
          icon={MdOutlinePersonAddAlt}
          color="blue"
        />
        <Card
          title="Editar Usuarios"
          description="Modifica la información de tus usuarios"
          titleButton="Editar Usuario"
          icon={MdOutlineEdit}
          color="purple"
        />
        <Card
          title="Eliminar Usuarios"
          description="Elimina usuarios en el sistema"
          titleButton="Eliminar Usuario"
          icon={MdDelete}
          color="red"
        />
        <Card
          title="Consultar Usuarios"
          description="Consulta información de tus usuarios en el sistema"
          titleButton="Consultar Usuario"
          icon={FaSearch}
          color="green"
        />
      </div>
    </div>
  );
}

export default GestionUsuarios;
