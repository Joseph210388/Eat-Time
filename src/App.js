/* Index = Home */
import React from 'react';
import './App.css';
import Nav_client from './component/Nav_client';
import { Link } from 'react-router-dom';
import Footer2 from './component/Footer2';
import logo from "./img/icons/logo.png";


function App() {

  return(
    <div className='App'>
      <Nav_client />
      <div className='containerApp'>
        <div className='AppSection1'>
          <div className='Appbox'>
            <img
                src={logo}
                style={{ maxWidth: '40px', height: 'auto',margin:'15px 0px' }}
              />
            <span>explocion de sobares indigenas</span>
            <h1 className='Appboxh1'>Delicia Peruana</h1>
            <span>Sabor a la tradicion, en el corazón del Amazonas.</span>
            <div className='AppboxButtons'>
              <Link to={"/Menu"}>
                <button>Menu</button>
              </Link>
              <Link to={"/About"}>
                <button>Nosotros</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='AppSection2'>

        {/* Aqui empieza el wave que quiero que crees */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <path fill="#2b2b2b" fillOpacity="1" d="M0,0L48,10.7C96,21,192,43,288,57.3C384,64,480,64,576,57.3C672,43,768,21,864,10.7C960,0,1056,0,1152,16C1248,32,1344,64,1392,80L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
          </svg>
        {/* fin de wave */}

          <div className="AppSection2texto">
            <div class="Appcard">
              <div class="card-image"></div>
              <p class="card-title">Card title</p>
              <p class="card-body">
                Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.
              </p>
            </div>
            <div class="Appcard">
              <div class="card-image"></div>
              <p class="card-title">Card title</p>
              <p class="card-body">
                Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.
              </p>
            </div>
            <div class="Appcard">
              <div class="card-image"></div>
              <p class="card-title">Card title</p>
              <p class="card-body">
                Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer2/>
    </div>
  )
}
export default App;
