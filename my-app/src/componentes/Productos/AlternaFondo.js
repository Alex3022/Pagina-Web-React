export function AlternaFondo () {
    function miFondo() {
        let bodyStyle = document.body.style;
        if (bodyStyle.backgroundColor === 'black') {
          bodyStyle.backgroundColor = 'white';
        } else {
          bodyStyle.backgroundColor = 'black';
        }
      }
    
      return (
        <button onClick={miFondo} >
          Alterna las luces
        </button>
      );
}