import React, { useState } from "react";
import '../css/Home.css';
import { Link } from "react-router-dom";
import logo from "../img/icons/logo.png";
import Slider from '../component/Slider';

function Home() {
  return (
    <div className='containerApp'>
      <div className='AppSection1'>
        <div className='Appbox'>
          <img
            src={logo}
            style={{ maxWidth: '40px', height: 'auto',margin:'15px 0px' }}
          />
          <span>Explosión de sabores indígenas</span>
          <h1 className='Appboxh1'>Delicia Peruana</h1>
          <span>Sabor a la tradición, en el corazón del Amazonas.</span>
          <div className='AppboxButtons'>
            <Link to={"/login"}>
              <button>Inicia Sesión</button>
            </Link>
            <Link to={"/register"}>
              <button>Regístrate</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='AppSection2'>
        {/* Aquí empieza el wave que quiero que crees */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path fill="#2b2b2b" fillOpacity="1" d="M0,0L48,10.7C96,21,192,43,288,57.3C384,64,480,64,576,57.3C672,43,768,21,864,10.7C960,0,1056,0,1152,16C1248,32,1344,64,1392,80L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        </svg>
        {/* Fin de wave */}
        <div className="AppSection2texto">
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default Home;
