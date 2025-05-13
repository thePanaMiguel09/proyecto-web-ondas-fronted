import React from "react";
import "./login.css";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
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
          <div className="contenedor-titulo">
            <h2>¡Bienvenido! Digita tus credenciales</h2>
            <p>Inicia sesión para entrar al campus</p>
          </div>

          <div className="grupo-formulario">
            <label htmlFor="email">Correo electrónico</label>
            <input id="email" type="email" placeholder="@email.com" />
          </div>

          <div className="grupo-formulario">
            <div className="fila-etiqueta">
              <label htmlFor="password">Contraseña</label>
              <a href="#">¿Olvidaste tu contraseña?</a>
            </div>
            <input id="password" type="text" placeholder="Ingresa tu contraseña" />
            <small>
              Diligencia correctamente la contraseña
            </small>
          </div>

          <div className="recordarme">
            <input type="checkbox" id="recordar" />
            <label htmlFor="recordar">Recordarme</label>
          </div>

          <button className="boton-login">Iniciar sesión</button>

          <p className="texto-registro">
            ¿No tienes una cuenta? <Link to="/registro">Regístrate</Link>
          </p>

          <div className="separador">
            <span className="linea-separador"></span>
            <span className="texto-separador">O regístrate con</span>
            <span className="linea-separador"></span>
          </div>

          <div className="iconos-sociales">
            <FaGoogle />
            <FaFacebookF />
            <FaApple />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;






