export function AlternaFondo () {
    function handleClick() {
        let bodyStyle = document.body.style;
        console.log("1--AlternaFondo "+bodyStyle.backgroundColor)
        if (bodyStyle.backgroundColor === 'black') {
          bodyStyle.backgroundColor = 'white';
        } else {
          bodyStyle.backgroundColor = 'black';
        }
      }
    
      return (
        <button onClick={handleClick}>
          Alterna las luces
        </button>
      );
}