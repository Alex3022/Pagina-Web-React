import { listProductos } from './datos.js';
import { getImageProducto } from './getImageProducto.js';
import './Productos.css';




export function List() {
    return (
    listProductos.map(producto =>
    <div id="divDeporte" className="color-container tercero" key={producto.id}>
      <div>
        <img 
        src={getImageProducto(producto)}
        alt={producto.nombre}></img>
        <h4>{producto.nombre}</h4>
        <p>{producto.descripcion}</p>
        <h3>{producto.valor}</h3>
      </div>
    </div>
  )
  )
}
