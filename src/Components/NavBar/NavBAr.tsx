import CardsFunctions from "../CardNav/CardNav";
import Profile from "../Profile/Profile";

import { CiUser } from "react-icons/ci";
import { FaSchool } from "react-icons/fa6";
import { PiProjectorScreenChartDuotone } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";

interface Props {
  rol: string;
  onChangePanel: (panel: "usuarios" | "proyectos" | "colegios") => void;
}

function NavBAr({ rol, onChangePanel }: Props) {
  return (
    <div className="h-dvh w-[20%] bg-background border-r-2 border-gray-700 flex flex-col items-center justify-evenly">
      <div className="w-full h-[10%] flex flex-col pt-5 pl-5 mb-10">
        <div className="font-extrabold text-2xl text-secondary">Proyecto</div>
        <div className="font-light text-text-muted">
          Panel de {rol.toUpperCase()}
        </div>
      </div>
      <div className="h-[50%] w-full flex flex-col items-center justify-evenly">
        <CardsFunctions
          title="Gestion de Usuarios"
          icon={CiUser}
          onClick={() => onChangePanel("usuarios")}
        />
        <CardsFunctions
          title="Gestion de Proyectos"
          icon={PiProjectorScreenChartDuotone}
          onClick={() => onChangePanel("proyectos")}
        />
        <CardsFunctions
          title="Gestion de Colegios"
          icon={FaSchool}
          onClick={() => onChangePanel("colegios")}
        />
      </div>
      <Profile rol="Coordinador" name="Miguel Ángel" />
      <button
        type="button"
        className="w-[90%] h-[40px] flex justify-evenly items-center border-2 border-gray-700 rounded-lg font-light text-white"
      >
        <CiLogout size={24} className="text-primary" /> Cerrar Sesión
      </button>
    </div>
  );
}

export default NavBAr;
