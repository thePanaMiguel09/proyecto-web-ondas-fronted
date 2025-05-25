import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useAuthStore } from "../../store/authSore";

export interface NavItem {
  label: string;
  href: string;
}

interface NavbarPProps {
  title?: string;
}

export default function NavbarP({ title = "EduTech" }: NavbarPProps) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const { usuario, logout } = useAuthStore();

  const userRole = usuario?.rol || "PENDIENTE";

  let dynamicNavItem: NavItem;

  switch (userRole) {
    case "PENDIENTE":
      dynamicNavItem = { label: "Noticias", href: "#noticias" };
      break;
    case "COORDINADOR":
      dynamicNavItem = {
        label: "Gestor de Coordinador",
        href: "#gestor-coordinador",
      };
      break;
    case "DOCENTE":
      dynamicNavItem = {
        label: "Gestor de Profesor",
        href: "#gestor-profesor",
      };
      break;
    case "ESTUDIANTE":
      dynamicNavItem = { label: "Mis Proyectos", href: "#mis-proyectos" };
      break;
    default:
      dynamicNavItem = { label: "Servicios", href: "#servicios" };
  }

  const navItems: NavItem[] = [{ label: "Inicio", href: "#" }, dynamicNavItem];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-[#0a192f] text-[#cbd5e1] flex justify-between items-center px-6 py-4 z-50 shadow-lg font-sans">
        <div className="text-xl font-bold">{title}</div>
        <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#0a192f] text-[#cbd5e1] z-40 transition-transform duration-300 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col justify-center items-start h-full pl-12 space-y-6 text-5xl font-semibold font-sans">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setOpen(false)}
              className="hover:underline"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              logout();
              navigate("/login");
              setOpen(false);
            }}
            className="hover:underline text-left"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </>
  );
}
