import FacebookLogin from 'react-facebook-login';

function Apiface() {
    const responseFacebook = (response) => {
        console.log(response);
      }
    return (
      <div className="Apiface">
        <br /><br />
           <FacebookLogin
    appId="1263866944182333"
    autoLoad={false}
    fields="name,email,picture"
    callback={responseFacebook} />
      </div>
  
    );
  }
  
  export default Apiface;