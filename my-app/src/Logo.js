import './Logo.css';
import logopagina10 from './Imagenes/logopagina10.jpg';

function Logo() {
  return (
    <div className="imagen-container">
        <img src={logopagina10} className="logo"/>
    </div>

  );
}

export default Logo;