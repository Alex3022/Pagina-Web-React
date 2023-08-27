import { listProductos } from './datos.js';
import { getImageProducto } from './getImageProducto.js';
import './Productos.css';
import { lstBanner } from './datoBanner.js';

//Muestra los productos del detalle en sus div, con sus imagenes, titulo, descripcion, valor y el boton del carro de compras
export function List() {
    return (
        listProductos.map(producto =>
            <div id={producto.idDiv} className="color-container tercero" key={producto.id}>
                <div>
                    <img
                        src={getImageProducto(producto)}
                        alt={producto.nombre} className='borderImgProducto'></img>
                    <h4>{producto.nombre}</h4>
                    <p>{producto.descripcion}</p>
                    <h3>{producto.valor}</h3>
                    <button id="carrito" type="button"
                        className="btnCarro" style={{ backgroundImage: `url('${producto.btnCarro}')` }}></button>
                </div>
            </div>
        )

    )
}

//Muestra los productos del banner, carga la imagen y el titulo de cada imagen
export function ListaBanner() {
    function sesionProducto() {

    }

    return (
        lstBanner.map(producto =>
            <div key={producto.id}>
                <a href={producto.idDiv} onClick={sesionProducto}>
                    <img id="img" src={getImageProducto(producto)} alt={producto.titulo} className='borderImgProducto' />
                    <h3>{producto.titulo}</h3>
                </a>
            </div>
        )

    )
}
