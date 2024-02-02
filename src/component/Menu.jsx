import React from "react";
import '../css/Style-Pages/Menu.css';
import Footer2 from "./Footer2";
import Nav_client from "./Nav_client";


function Menu() {
    const obtenerFecha = () => {
    const fecha = new Date();
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
    const dia = diasSemana[fecha.getDay()];
    const mes = meses[fecha.getMonth()];
    const anio = fecha.getFullYear();

    return `${dia}, ${fecha.getDate()} ${mes} ${anio}`;
    };
    return(
        <div>
            <Nav_client />
            <div className="Menucontainer">
                <div className="Menucontainerbox">
                    <h2>Tay Pay Menu</h2>
                    <hr />
                    <div className="Menufecha">
                    <span>{obtenerFecha()}</span>
                    </div>
                    <p>Preparamos la autentica y deliciosa comida peruana con ingredientes frescos cocinados al momento. Siente la sazon de la comida andina</p>
                    <div className="Menuopcions">
                        <div className="Menuopcionsbox1">
                            <h3>Piqueos</h3>
                        </div>
                        <div className="Menuopcionsbox2">
                            <h3>Primero</h3>
                        </div>
                        <div className="Menuopcionsbox3">
                            <h3>Bebidas</h3>
                        </div>
                        <div className="Menuopcionsbox4">
                            <h3>Postres</h3>
                        </div>
                        <div className="Menuopcionsbox5">
                            <h3>Promociones</h3>
                        </div>
                    </div>
                </div>

            </div>
            <Footer2 />

        </div>
    );
}
export default Menu;