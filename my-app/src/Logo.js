import './Logo.css';
import logopagina1 from './Imagenes/logopagina1.jpg';

function Logo() {
  return (
    <div className="image-container">
        <img src={logopagina1} className="logo"/>
    </div>

  );
}

export default Logo;