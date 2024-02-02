import React from "react";
import Nav_client from "./Nav_client";
import Footer2 from "./Footer2";
import imgAbout from "../img/photo/Aboutimg.png"
import '../css/Style-Pages/About.css';
import { Link } from "react-router-dom";

function About(){
    return(
        <div>
            <Nav_client />
            <div className="containerAbout">
                <div className="Aboutsection1">
                    <div className="Aboutsection1box">
                        <h2>Sobre Nosotros</h2>
                        <hr />
                        <p>Tai Pai es un restaurante en Asturias que ofrece auténtica gastronomía peruana desde 1990. Nos apasiona compartir los sabores y tradiciones culinarias de Perú con el mundo. Nuestro talentoso equipo de chefs, fusiona técnicas contemporáneas con sabores auténticos.</p>
                        <Link to={"/Contact"}>
                            <button>Contacto</button>
                        </Link>
                    </div>
                </div>
                <div className="Aboutsection2">
                    <img src={imgAbout} alt="" />
                </div>
            </div>
            <Footer2/>
        </div>
    );
}
export default About;