import React from "react";
import '../css/Style-Pages/Contact.css';
import imgContact from "../img/photo/Contactimg.png";

function Contact(){
    const handleSubmit = (e) => {
        e.preventDefault();
      };
    
      return (
        <div>

          <div className="containerContact container-fluid bg-white">
            <div className="Contactsection2">
              <img className="img-fluid" src={imgContact} alt="" />
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
        </div>
      );
}
export default Contact;