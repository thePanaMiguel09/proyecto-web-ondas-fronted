import { useState } from "react";
import { login } from "../../../core/actions/auth/authService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Previene recarga

    const result = await login(email, password);
    if (result.success) {
      console.log("Usuario logueado:", result.data.usuario);
      // Aquí puedes guardar el token en localStorage o Zustand
      // localStorage.setItem("token", result.data.token);
      // redirigir con react-router-dom
    } else {
      alert(result.error); // o mostrarlo en pantalla con estado
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[80%] h-[90%] bg-dark rounded-2xl flex flex-col justify-start items-center"
    >
      <div className="w-[100%] h-[40%] flex flex-col">
        <div className="w-[100%] h-[50%] flex justify-center items-center"></div>
        <div className="flex flex-col text-center w-[100%] h-[50%]">
          <div className="font-extrabold text-primary mb-2 text-2xl">
            Proyecto
          </div>
          <div className="font-semibold text-secondary text-xs">
            Sistema de Gestión de Proyectos Escolares
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[60%] flex flex-col justify-evenly items-center">
        <div className="w-[90%] flex flex-col">
          <label htmlFor="email" className="font-semibold text-secondary">
            Correo
          </label>
          <input
            className="bg-gray-700 font-semibold rounded-lg w-[100%] h-[40px] text-sm pl-4 mt-2 text-gray-500 border-2 border-gray-600"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo electrónico"
          />
        </div>
        <div className="w-[90%]">
          <label className="font-semibold text-secondary" htmlFor="password">
            Contraseña
          </label>
          <input
            id="password"
            className="bg-gray-700 font-semibold w-[100%] h-[40px] rounded-lg text-sm pl-4 mt-2 text-gray-500 border-2 border-gray-600"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <div className="w-[90%] flex justify-center flex-col">
          <button
            type="submit"
            className="w-[100%] h-[40px] bg-primary rounded-lg text-white"
          >
            Ingresar
          </button>
          <div className="text-center font-extralight mt-5 text-secondary">
            ¿No tienes una cuenta?
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
