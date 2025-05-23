import NavBAr from "../../../Components/NavBar/NavBAr";
import GestionProyectos from "../../Panels/GestionProyectos/GestionProyectos";
import GestionUsuarios from "../../Panels/GestionUsuarios/GestionUsuarios";
import GestionColegios from "../../Panels/GestionColegios/GestionColegios";
function Dashboard() {
  return (
    <div className="w-full h-full bg-dark flex">
      <NavBAr rol="coordinador" />
      <GestionColegios />
    </div>
  );
}

export default Dashboard;
