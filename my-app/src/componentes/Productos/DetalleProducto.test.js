import { listProductos } from './datos.js';


describe('Productos', () => {

    it('Productos cargados en el detalle', () => {

        listProductos.map(producto =>

            console.log("Producto: " + producto.descripcion)

        )

    })
})