// jsx e igual HTML 

function Varia () {
     const nome = "yuri";
     const url = "https://via.placeholder.com/150"

     function som (a,b){
       return a + b;
     }
    return(
       <div>
        <p>ola {nome}</p>
        <p>soma {som(5,6)}</p>
        <img src={url} alt="Minha imagem" srcset="" />
       </div>
    )
}

export default Varia