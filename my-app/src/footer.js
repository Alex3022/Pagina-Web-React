import './footer.css';
import FacebookLogin from 'react-facebook-login';

function Footer (){
  const responseFacebook = (response) => {
    console.log(response);
  }
    return (
      
      <footer className="Footer">
      <p>Recibe promociones por medio del correo</p>
      <div>
      <form>
        <input placeholder='correo electronico' data-testid="correo electronico" required></input>
        <input data-testid="boton" type='submit'></input>
      </form>
        </div>
        
        <div className="Apiface">
        <br /><br />
           <FacebookLogin
    appId="1263866944182333"
    autoLoad={false}
    fields="name,email,picture"
    callback={responseFacebook} />
      </div>     
    </footer>
    
    );
}
export default Footer;