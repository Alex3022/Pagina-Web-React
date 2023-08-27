
//import React, { useState } from 'react';
import ModalLogin from './componentes/Modal/ModalLogin';
import './App.css';
import Titulo from './componentes/Titulo/titulo';
import { List, ListaBanner } from './componentes/Productos/DetalleProducto';
import { AlternaFondo } from './componentes/Productos/AlternaFondo';


function App() {


  return (
    <div className="App " >

      <Titulo />
      <ModalLogin />
      <AlternaFondo />

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
    </div>
  );
}

export default App;