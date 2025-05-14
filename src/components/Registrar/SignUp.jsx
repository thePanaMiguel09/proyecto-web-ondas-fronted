import { useEffect, useState } from "react";

import "../Login/login.css";

import "./SignUp.css";

function SignUp() {
  const [colegio, setColegio] = useState([]);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Previene la recarga de la página
    console.log("Email:", data.email);
    console.log("Contraseña:", data.password);
    // Aquí puedes enviar los datos a tu backend

    fetch("https://web-backend-production-365b.up.railway.app/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "http://web-backend-production-365b.up.railway.app/institutions",
        {
          method: "GET",
        }
      );

      const json = await data.json();
      setColegio(json.data);
    };
    fetchData();
  }, []);

  return (
    <div className="contenedor-login">
      <div className="caja-login">
        <div className="panel-izquierdo">
          <div className="contenido-izquierdo">
            <div className="icono-superior">🎓</div>
            <h1>EducaTE</h1>
            <p>Plataforma de aprendizaje</p>
          </div>
        </div>

        <div className="panel-derecho">
          <h2 className="titulo-registro">Sign Up</h2>

          <div className="fila-formulario">
            <div className="grupo-formulario">
              <label htmlFor="nombre1">Primer nombre</label>
              <input
                id="nombre1"
                type="text"
                placeholder="Ingresa primer nombre"
              />
            </div>
            <div className="grupo-formulario">
              <label htmlFor="nombre2">Segundo nombre</label>
              <input
                id="nombre2"
                type="text"
                placeholder="Ingresa segundo nombre"
              />
            </div>
          </div>
          <div className="fila-formulario">
            <div className="grupo-formulario">
              <label htmlFor="nombre1">Primer Apellido</label>
              <input
                id="nombre1"
                type="text"
                placeholder="Ingresa primer apellido"
              />
            </div>
            <div className="grupo-formulario">
              <label htmlFor="nombre2">Segundo Apellido</label>
              <input
                id="nombre2"
                type="text"
                placeholder="Ingresa segundo apellido"
              />
            </div>
          </div>

          <div className="fila-formulario">
            <div className="grupo-formulario">
              <label htmlFor="apellido1">Correo</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Ingresa tu correo"
                value={data.email}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="grupo-formulario">
              <label htmlFor="apellido2">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Ingresa tu contraseña"
                value={data.password}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
              />
            </div>
          </div>

          <div className="fila-formulario">
            <div className="grupo-formulario">
              <label htmlFor="tipoId">Tipo de identificación</label>
              <input
                id="tipoId"
                type="text"
                placeholder="Tipo de identificación"
              />
            </div>
            <div className="grupo-formulario">
              <label htmlFor="numeroId">Número de identificación</label>
              <input
                id="numeroId"
                type="text"
                placeholder="Número de identificación"
              />
            </div>
          </div>

          {/* Fecha de nacimiento y lugar de nacimiento */}
          <div className="fila-formulario">
            <div className="grupo-formulario">
              <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
              <input id="fechaNacimiento" type="date" />
            </div>
            <div className="grupo-formulario">
              <label htmlFor="lugarNacimiento">Lugar de nacimiento</label>
              <input
                id="lugarNacimiento"
                type="text"
                placeholder="Lugar de nacimiento"
              />
            </div>
          </div>

          {/* Teléfono y institución */}
          <div className="fila-formulario">
            <div className="grupo-formulario">
              <label htmlFor="telefono">Número de teléfono</label>
              <input
                id="telefono"
                type="text"
                placeholder="Número de teléfono"
              />
            </div>
            <div className="grupo-formulario">
              <label htmlFor="institucion">Institución</label>
              <select
                id="institucion"
                name="institucion"
                className="grupo-formulario"
              >
                <option value="">Seleccione tu institución</option>
                {colegio.map((institucion) => (
                  <option
                    key={institucion._id}
                    value={institucion.nameInstitute}
                  >
                    {institucion.nameInstitute}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button className="boton-login" onClick={handleSubmit}>
            Registrarse
          </button>

          <p className="texto-registro">
            ¿Ya tienes una cuenta? <a href="/">Inicia sesión</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
