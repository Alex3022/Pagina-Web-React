//Mariana Acevedo Gonzalez, Andres Felipe Restrepo, Dhayanna Sanchez, Cristian Santiago Gomez
//import React, { useState } from 'react';
import ModalLogin from './componentes/Modal/ModalLogin';
import './App.css';
import Titulo from './componentes/Titulo/titulo';
import { List, ListaBanner } from './componentes/Productos/DetalleProducto';
import { AlternaFondo } from './componentes/Productos/AlternaFondo';
import { Footer } from './componentes/Productos/Footer';
import Logo from './Logo';

function App() {


  return (
    <div className="App " >
      <Logo />
      <AlternaFondo />

      <Titulo />
      <ModalLogin />


      <div className="banner container">
        <div className="header-content">
          <div className="color-banner">
            <div className="slider">

              <ListaBanner />

            </div>
          </div>
        </div>
      </div>



      <div className='divIniciProducto'>
        <List />
      </div>

      <Footer />
    </div>
  );
}

export default App;