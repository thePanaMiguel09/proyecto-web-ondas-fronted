import { FaSearch } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { LuGitPullRequestCreate } from "react-icons/lu";
import { MdOutlineAssessment } from "react-icons/md";

import Card from "../Components/Card/Card";

function GestionColegios() {
  return (
    <div className="w-[80%] h-full">
      <div className="w-full h-[10%]">
        <div className="text-4xl font-bold text-white ml-5 mt-5">
          Gestión de Proyectos
        </div>
        <div className="ml-5 mt-1 text-secondary font-light">
          Administra los proyectos
        </div>
      </div>
      <div className="w-full h-[90%] flex  flex-wrap justify-center items-center gap-2">
        <Card
          title="Crear Proyecto"
          description="Crea nuevos proyectos"
          titleButton="Crear Proyecto"
          icon={LuGitPullRequestCreate}
          color="blue"
        />
        <Card
          title="Evaluar Proyectos"
          description="Evalua proyectos de las instituciones"
          titleButton="Evaluar Proyecto"
          icon={MdOutlineAssessment}
          color="purple"
        />
        <Card
          title="Eliminar Proyecto"
          description="Elimina proyectos de tus instituciones"
          titleButton="Eliminar Proyecto"
          icon={MdDelete}
          color="red"
        />
        <Card
          title="Consultar Proyecto"
          description="Consulta información de tus proyectos"
          titleButton="Consultar Proyectos"
          icon={FaSearch}
          color="green"
        />
      </div>
    </div>
  );
}

export default GestionColegios;
