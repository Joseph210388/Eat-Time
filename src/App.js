/* Index = Home */
import React from 'react';
import './App.css';
import Nav_client from './component/Nav_client';
import Footer2 from './component/Footer2';
import Home from  './component/Home';
import About from './component/About';
import Contact from './component/Contact';



function App() {

  return(
    <div className='App'>
      <Nav_client />
      <Home />
      <About/>
      <Contact />
      <Footer2/>
    </div>
  )
}
export default App;
