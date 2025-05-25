import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { signup } from "../../api/auth";

import { useAuthStore } from "../../store/authSore";

// Validaciones con Yup
const schema = yup.object().shape({
  nombres: yup
    .string()
    .required("El campo de nombres es requerido.")
    .matches(
      /^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/,
      "El nombre solo puede contener letras."
    ),
  apellidos: yup
    .string()
    .required("El campo de apellidos es requerido")
    .matches(
      /^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/,
      "El apellido solo puede contener letras."
    ),
  tipoIdentificacion: yup
    .string()
    .required("Selecciona un tipo de identificación."),
  numeroIdentificacion: yup
    .string()
    .required("El número de identificación es obligatorio.")
    .matches(/^\d+$/, "Debe contener solo números."),
  email: yup
    .string()
    .required("El correo es obligatorio.")
    .email("El correo no es válido."),
  password: yup
    .string()
    .required("La contraseña es obligatoria.")
    .min(6, "La contraseña debe tener al menos 6 caracteres."),
});

function SignupForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    const result = await signup({
      nombres: data.nombres,
      apellidos: data.apellidos,
      email: data.email,
      password: data.password,
      id: data.numeroIdentificacion,
      tipoIdentificacion: data.tipoIdentificacion,
    });

    if (result.success) {
      console.log("✅ Usuario creado:", result.msg);
      console.log("🔐 Token:", result.token);

      // Aquí puedes guardar el token en localStorage/cookies
      useAuthStore.getState().login(result.token, result.usuario);

      // Redirigir al usuario
      navigate("/");
    } else {
      console.error("❌ Error:", result.msg);
      // Mostrar un error visual en pantalla
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-full flex flex-col justify-center text-secondary"
    >
      <div className="text-center h-[15%] w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-wide">
          REGISTRARSE
        </h2>
        <p className="mt-2 text-sm md:text-base text-primary/70 font-light">
          Crea una cuenta para acceder al sistema
        </p>
      </div>

      {/* Muestra errores */}
      {Object.values(errors).length > 0 && (
        <div className="w-full text-primary text-sm px-4 py-2">
          <ul className="list-disc pl-5">
            {Object.entries(errors).map(([key, err]: any) => (
              <li key={key}>{err.message}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="h-[80%] flex flex-col justify-evenly">
        <div className="w-full flex justify-evenly">
          <div className="w-[40%]">
            <label htmlFor="firstName">Nombres</label>
            <input
              id="firstName"
              type="text"
              className="w-full"
              {...register("nombres")}
            />
          </div>
          <div className="w-[40%]">
            <label htmlFor="lastName">Apellidos</label>
            <input
              id="lastName"
              type="text"
              className="w-full"
              {...register("apellidos")}
            />
          </div>
        </div>

        <div className="w-full h-[15%] flex flex-col items-center">
          <div className="w-[87%] h-full flex flex-col justify-between">
            <label htmlFor="idType">Tipo de Identidicación</label>
            <select
              id="idType"
              className="w-full"
              {...register("tipoIdentificacion")}
            >
              <option value="CC">Cédula</option>
              <option value="TI">Tarjeta de Identidad</option>
            </select>
          </div>
        </div>

        <div className="w-full h-[15%] flex flex-col items-center">
          <div className="w-[87%]">
            <label htmlFor="idNumber">Número de Identificación</label>
            <input
              id="idNumber"
              type="text"
              className="w-full"
              {...register("numeroIdentificacion")}
            />
          </div>
        </div>

        <div className="w-full h-[15%] flex flex-col items-center">
          <div className="w-[87%]">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              id="email"
              type="email"
              className="w-full"
              {...register("email")}
            />
          </div>
        </div>

        <div className="w-full h-[15%] flex flex-col items-center justify-between">
          <div className="w-[87%]">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              className="w-full"
              {...register("password")}
            />
          </div>
        </div>
      </div>

      <div className="w-full h-[15%] flex flex-col items-center justify-center">
        <button
          type="submit"
          className="w-[85%] h-12 bg-primary rounded-lg text-white text-lg font-semibold"
        >
          Crear cuenta
        </button>
        <span
          className="text-sm font-light text-primary/70 hover:underline cursor-pointer"
          onClick={() => navigate("/")}
        >
          ¿Ya tienes una cuenta? Inicia sesión
        </span>
      </div>
    </form>
  );
}

export default SignupForm;
