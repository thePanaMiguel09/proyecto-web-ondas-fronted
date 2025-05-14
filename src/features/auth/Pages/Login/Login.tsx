import React from "react";
import Input from "../../../../components/inputs/Input";
import Button from "../../../../components/buttons/Button";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="h-[80%] w-[90%] max-w-[800px] flex flex-col md:flex-row border border-sky-400 rounded-xl overflow-hidden shadow-md">
      {/* Bloque EducaTE */}
      <div className="w-full md:w-1/2 h-48 md:h-full flex items-center justify-center font-bold text-3xl text-white bg-sky-400">
        EducaTE
      </div>

      {/* Bloque formulario */}
      <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-evenly p-4 gap-6">
        <div className="flex flex-col items-center">
          <div className="text-3xl font-medium text-sky-400">Log In</div>
          <div className="text-sm font-extralight text-center">
            Inicia sesión en tu cuenta
          </div>
        </div>

        <div className="w-full px-2 md:px-6 flex flex-col gap-4">
          <Input
            id="email"
            label="Correo"
            placeholder="Ingresa tu correo"
            required
          />
          <Input
            id="pass"
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
            type="password"
            required
          />
        </div>

        <Button children={"Ingresar"} type="submit" className="w-[90%] py-3" />
        <div className="w-[90%] flex items-center">
          <div className="text-sm font-light mr-3">No tienes una cuentas?</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
