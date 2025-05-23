import NavBAr from "../../../Components/NavBar/NavBAr";
import GestionUsuarios from "../../Panels/GestionUsuarios/GestionUsuarios";
function Dashboard() {
  return (
    <div className="w-full h-full bg-dark flex">
      <NavBAr rol="coordinador" />
      <GestionUsuarios />
    </div>
  );
}

export default Dashboard;
