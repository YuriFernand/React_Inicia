import React, {useState} from "react";

function Testes ({nome, idade}){
    return(
        <React.Fragment>
            <p>Seu nome e {nome}</p>
            <p>sua idade e {idade}</p>
        </React.Fragment>
    )
}


export default Testes