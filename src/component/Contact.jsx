import React from "react";
import '../css/Style-Pages/Contact.css';
import Footer2 from "./Footer2";
import Nav_client from "./Nav_client";
import imgContact from "../img/photo/Contactimg.png";
import { Link } from "react-router-dom";

function Contact(){
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de envío del formulario, por ejemplo, enviar los datos a un servidor o hacer alguna acción con los datos.
      };
    
      return (
        <div>
          <Nav_client />
          <div className="containerContact">
            <div className="Contactsection2">
              <img src={imgContact} alt="" />
            </div>
            <div className="Contactsection1">
              <div className="Contactsection1box">
                
                <h2>Contacto</h2>
                <hr />
                {/* Formulario de contacto */}
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-column">
                    <label>
                      Nombre:
                      <input type="text" name="nombre" />
                    </label>
                    <label>
                      Apellido:
                      <input type="text" name="apellido" />
                    </label>
                  </div>
                  <div className="form-column">
                    <label>
                      Email:
                      <input type="email" name="email" />
                    </label>
                    <label>
                      Teléfono:
                      <input type="tel" name="telefono" />
                    </label>
                  </div>
                  <label>
                    Mensaje:
                    <textarea name="mensaje" rows="4" />
                  </label>
                  <br />
                  <button type="submit">Enviar</button>
                </form>
              </div>
            </div>
          </div>
          <Footer2 />
        </div>
      );
}
export default Contact;