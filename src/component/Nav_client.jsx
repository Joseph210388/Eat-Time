import React, { useState, useEffect } from "react";
import '../css/Nav_client.css';
import { Link } from "react-router-dom";
import logo from "../img/icons/logo.png";


function Nav_client() {
  /* js */
  const [burgerChecked, setBurgerChecked] = useState(false);

  useEffect(() => {
      if (burgerChecked) {
        document.querySelector('.Navbar').style.right = '0%';
      } else {
        document.querySelector('.Navbar').style.right = '-100%';
      }
  }, [burgerChecked]);
  /* fin de js */
  return (
    <header id="Nav_client">
      <div className="Navlogo">
        <Link to={"/"}>
          <img src={logo} style={{ maxWidth: '40px', height: 'auto' }} />
        </Link>
        <Link to={"/"}>
          <h4>Tay Pay</h4>
        </Link>
      </div>
      <div className="Navbar">
        <ul>
          <li><Link to={"/"}>Inicio</Link></li>
          <li><Link to={"/Menu"}>Menu</Link></li>
          <li><Link to={"/About"}>Acerca</Link></li>
          <li><Link to={"/Contact"}>Contacto</Link></li>
        </ul>
      </div>
      <div id="Navlogin">
        <Link to={"/Login"}>
          <button>Iniciar Sesion</button>      
        </Link>
        <Link to={"/Register"}>
          <button>Registrar</button>      
        </Link>
        <label className="burger" htmlFor="burger">
          <input type="checkbox" id="burger" checked={burgerChecked} 
            onChange={() => setBurgerChecked(!burgerChecked)} />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

     
    </header>
  );
};

export default Nav_client;