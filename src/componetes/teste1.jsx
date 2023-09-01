import React , {useState} from "react";


function Teste1 () {
    const exibirAviso = () => {
        alert("Cuidado!");
      } 
    const [color,setColor] = useState ("vermelho");
    return(
        <React.Fragment>
             <button onClick={exibirAviso}>Exibir Aviso</button>
        <div>
           <h1>Minha cor favorita e {color}!</h1>
           <button type="button" onClick={() => setColor("azul")}>
              Mudar para azul 
           </button>
        </div>
        </React.Fragment>
    )
}

export default Teste1