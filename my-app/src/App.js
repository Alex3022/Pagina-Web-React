
//import React, { useState } from 'react';
import ModalLogin from './componentes/Modal/ModalLogin';
import './App.css';
import Titulo from './componentes/Titulo/titulo';
import { List } from './componentes/Productos/DetalleProducto';


function App() {

  
  return (
    <div className="App " >
     
     <Titulo/>
     <ModalLogin/>

     <List />
    
    
    </div>
  );
}

export default App;