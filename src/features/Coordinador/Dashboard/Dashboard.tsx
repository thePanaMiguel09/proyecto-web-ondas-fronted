import NavBAr from "../../../Components/NavBar/NavBAr";
import GestionProyectos from "../../Panels/GestionProyectos/GestionProyectos";
import GestionUsuarios from "../../Panels/GestionUsuarios/GestionUsuarios";
import GestionColegios from "../../Panels/GestionColegios/GestionColegios";
import { useState } from "react";
function Dashboard() {
  const [panel, setPanel] = useState<"usuarios" | "proyectos" | "colegios">(
    "usuarios"
  );

  return (
    <div className="w-full h-full bg-dark flex">
      <NavBAr rol="coordinador" onChangePanel={setPanel} />

      {panel === "usuarios" && <GestionUsuarios />}
      {panel === "proyectos" && <GestionProyectos />}
      {panel === "colegios" && <GestionColegios />}
    </div>
  );
}

export default Dashboard;
