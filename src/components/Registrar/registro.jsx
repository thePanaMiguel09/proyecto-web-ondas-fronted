import React from "react";
import "../Login/login.css";

function Registro() {
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
          <h2 className="titulo-registro">REGISTRO</h2>

          <div className="fila-formulario">
            <div className="grupo-formulario">
              <label htmlFor="nombre1">Primer nombre</label>
              <input id="nombre1" type="text" placeholder="Ingresa primer nombre" />
            </div>
            <div className="grupo-formulario">
              <label htmlFor="nombre2">Segundo nombre</label>
              <input id="nombre2" type="text" placeholder="Ingresa segundo nombre" />
            </div>
          </div>

          <div className="fila-formulario">
            <div className="grupo-formulario">
              <label htmlFor="apellido1">Primer apellido</label>
              <input id="apellido1" type="text" placeholder="Ingresa primer apellido" />
            </div>
            <div className="grupo-formulario">
              <label htmlFor="apellido2">Segundo apellido</label>
              <input id="apellido2" type="text" placeholder="Ingresa segundo apellido" />
            </div>
          </div>

          <div className="fila-formulario">
            <div className="grupo-formulario">
              <label htmlFor="tipoId">Tipo de identificación</label>
              <input id="tipoId" type="text" placeholder="Tipo de identificación" />
            </div>
            <div className="grupo-formulario">
              <label htmlFor="numeroId">Número de identificación</label>
              <input id="numeroId" type="text" placeholder="Número de identificación" />
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
              <input id="lugarNacimiento" type="text" placeholder="Lugar de nacimiento" />
            </div>
          </div>

          {/* Teléfono y institución */}
          <div className="fila-formulario">
            <div className="grupo-formulario">
              <label htmlFor="telefono">Número de teléfono</label>
              <input id="telefono" type="text" placeholder="Número de teléfono" />
            </div>
            <div className="grupo-formulario">
              <label htmlFor="institucion">Institución</label>
              <input id="institucion" type="text" placeholder="Institución" />
            </div>
          </div>

          <button className="boton-login">Registrarse</button>

          <p className="texto-registro">
            ¿Ya tienes una cuenta? <a href="/">Inicia sesión</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registro;



