import './Logo.css';
import logopagina from './Imagenes/logopagina.jpg';

function Logo() {
  return (
    <div className="image-container">
        <img src={logopagina} className="logo"/>
    </div>

  );
}

export default Logo;