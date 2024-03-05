import React from "react";
import imgAbout from "../img/photo/Aboutimg.png"
import '../css/Style-Pages/About.css';

function About(){
    return(
            <div className="container p-3">
                <div className="row p-2 AboutSectionBox">
                    <div className="col-6 Aboutsection1box">
                        <h2 className="text-white">Sobre Nosotros</h2>
                        <hr />
                        <p className="text-white">Tai Pai es un restaurante en Asturias que ofrece auténtica gastronomía peruana desde 1990. Nos apasiona compartir los sabores y tradiciones culinarias de Perú con el mundo. Nuestro talentoso equipo de chefs, fusiona técnicas contemporáneas con sabores auténticos.</p>
                    </div>
                    <div className="col-6 Aboutsection2box">
                        <img className="img-fluid rounded-img" src={imgAbout} alt="" />
                    </div>
                </div>
            </div>
    );
}
export default About;