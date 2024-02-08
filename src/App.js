/* Index = Home */
import React from 'react';
import './App.css';
import Nav_client from './component/Nav_client';
import { Link } from 'react-router-dom';
import Footer2 from './component/Footer2';
import logo from "./img/icons/logo.png";
import Home from  './component/Home';


function App() {

  return(
    <div className='App'>
      <Nav_client />
      <Home />
      <Footer2/>
    </div>
  )
}
export default App;
