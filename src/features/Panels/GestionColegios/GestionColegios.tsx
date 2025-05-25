import { FaSearch } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { LuGitPullRequestCreate } from "react-icons/lu";
import { MdOutlineEdit } from "react-icons/md";

import Card from "../../../Components/CustomCard/CustomCard";

function GestionColegios() {
  return (
    <div className="w-[80%] h-full">
      <div className="w-full h-[10%]">
        <div className="text-4xl font-bold text-white ml-5 mt-5">
          Gestión de Instituciones
        </div>
        <div className="ml-5 mt-1 text-secondary font-light">
          Administra las instituciones
        </div>
      </div>
      <div className="w-full h-[90%] flex  flex-wrap justify-center items-center gap-2">
        <Card
          title="Crear Institución"
          description="Crea nuevas instituciones"
          titleButton="Crear Institución"
          icon={LuGitPullRequestCreate}
          color="purple"
        />
        <Card
          title="Editar Instituciones"
          description="Edita información de tus instituciones"
          titleButton="Editar Insticución"
          icon={MdOutlineEdit}
          color="purple"
        />
        <Card
          title="Eliminar Instituciones"
          description="Elimina instituciones en el sistema"
          titleButton="Eliminar Institución"
          icon={MdDelete}
          color="red"
        />
        <Card
          title="Consultar Instituciones"
          description="Consulta información de tus instituciones"
          titleButton="Consultar Institucion"
          icon={FaSearch}
          color="green"
        />
      </div>
    </div>
  );
}

export default GestionColegios;
