
import './stilos.css';
import Card from "./componetes/card";
import Varia from './componetes/teste';
import React , {useState} from "react";
import Props from './componetes/props';
import Teste1 from './componetes/teste1';



function App() {

  const nome = "maria"

  return (
    <React.Fragment>
       <Props nome="yuri"/>
       <Props nome ={nome}/>
    </React.Fragment>
  );
}
export default App;

