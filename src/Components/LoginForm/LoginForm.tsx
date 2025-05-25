import React from "react";
import { useState } from "react";
import { useAuthStore } from "../../store/authSore";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { login as loginAPI } from "../../api/auth";

function LoginForm() {
  const setAuth = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated());

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await loginAPI(email, password); // 👈 llamada al backend

      if (result && result.usuario && result.token) {
        setAuth(result.token, result.usuario); // 👈 guardamos en el store
        console.log("Entra al handle");
        navigate("/"); // 👈 redirigimos
      } else {
        alert(result?.error || "Error desconocido al iniciar sesión");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Fallo en la autenticación.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center gap-10 text-secondary"
    >
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-wide">
          BIENVENIDO
        </h2>
        <p className="mt-2 text-sm md:text-base text-primary/70 font-light">
          Ingresa al sistema con tus credenciales
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <label htmlFor="email" className="font-semibold">
            Correo
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo electrónico"
            className="mt-2 h-12 rounded-lg bg-gray-700 border-2 border-gray-600 px-4 text-base text-gray-300 placeholder-gray-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="font-semibold">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
            className="mt-2 h-12 rounded-lg bg-gray-700 border-2 border-gray-600 px-4 text-base text-gray-300 placeholder-gray-500"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-5">
        <button
          type="submit"
          className="w-full h-12 bg-primary rounded-lg text-white text-lg font-semibold"
        >
          Ingresar
        </button>
        <span className="text-sm font-light text-primary/70">
          <Link to={"/signup"}>¿No tienes una cuenta?</Link>
        </span>
      </div>
    </form>
  );
}

export default LoginForm;
