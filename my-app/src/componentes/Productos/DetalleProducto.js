import { listProductos } from './datos.js';
import { getImageProducto } from './getImageProducto.js';
import './Productos.css';
import { lstBanner } from './datoBanner.js';
//import carro from './carro.png';




export function List() {
    return (
        listProductos.map(producto =>
            <div id={producto.idDiv} className="color-container tercero" key={producto.id}>
                <div>
                    <img
                        src={getImageProducto(producto)}
                        alt={producto.nombre}></img>
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




export function ListaBanner() {
    function sesionProducto() {
       
      }

    return (
        lstBanner.map(producto =>
            <div key={producto.id}>
                <a href={producto.idDiv} onClick={sesionProducto}>
                    <img id="img" src={getImageProducto(producto)} alt={producto.titulo}/>
                    <h3>{producto.titulo}</h3>
                </a>
            </div>
        )

    )
}



/*export const useModal = (valor) => {
    const [isOpen, setIsOpen] = useState(initialValue)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    return [isOpen, openModal, closeModal]
}*/
