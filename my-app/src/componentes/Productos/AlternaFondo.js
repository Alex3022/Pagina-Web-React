import './Productos.css';

//Alterna el fondo de la vista entre modo claro y oscuro, tambien alterna la imagen del boton
export function AlternaFondo() {
    function miFondo() {
        let bodyStyle = document.body.style;
        if (bodyStyle.backgroundColor === 'black') {
            bodyStyle.backgroundColor = 'white';
            document.getElementById("btnFondo").style.backgroundImage =
                `url('/imagenes/luna.png')`
            document.getElementById("btnFondo").title = "Modo Claro"
        } else {
            bodyStyle.backgroundColor = 'black';
            document.getElementById("btnFondo").style.backgroundImage =
                `url('/imagenes/sol.png')`
            document.getElementById("btnFondo").title = "Modo Oscuro"
        }
    }

    return (
        <button id='btnFondo' onClick={miFondo} style={{ backgroundImage: `url('/imagenes/sol.png')` }}
            className="btnAlternaFondo" title='Cambia Fondo' />

    );
}