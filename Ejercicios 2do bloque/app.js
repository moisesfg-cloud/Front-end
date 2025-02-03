//Aqui se declara la variable que almacena el numero secreto generado en la funcion 
let numeroSecreto = generarNumeroSecreto(); //Hambito o alcance de bloque


//Este bloque asigna mediante un elemtento y el texto titutlo y parrafo
function asignarTexoElemento(elemento,texto){
    //querySelector funcion que permite entrar a cada uno de los elementos
    //documentObjetModel
    /*
    let titulo = document.querySelector('h1');
    titulo.innerHTML = "Juego del numero secreto"

    let parrafo = document.querySelector('p');
    titulo.innerHTML = "Indica un número del 1 al 10:"
    */
    let elementoHTML = document.querySelector(elemento); //Te permite entrar a cada uno de los elementos
    elementoHTML.innerHTML = texto;
}


//Este bloque te hace saber mediante una alerta que hiciste click en el botón
//Asi se crean funciones
function verificarIntento(){
    //Estamos buscando elementos por su id, posterior a eso podemos tambien obtener los valores y al mismo tiempo se esta convirtiendo el valor en nùmero integer 
    let  numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value);
    //Imprimimos que tipo de dato es
    console.log(typeof(numeroDeUsuario));
    //Imprimimos en consola que numero nos aparece
    console.log(numeroDeUsuario);
    //Imprimimos que tipo de dato es
    console.log(typeof(numeroSecreto));
    //Imprimimos en consola que numero nos aparece
    console.log(numeroSecreto);
    // === esto significa que a la hora de compararse debe de ser igual en valor
    console.log(numeroDeUsuario === numeroSecreto);
    return;
}

//Este bloque genera el número secreto
function generarNumeroSecreto(){
    return Math.floor(Math.random()* 10)+1;
  }
//Este bloque es la continuación desde la linea 5 a la 9
asignarTexoElemento('h1','Bienvenido al juego del número secreto') //De esta manera automatizamos el proceso de estar definiendo variables y por medio de una sola funcion podemos hacer todo 
asignarTexoElemento('p','Ingresa un número del 1 al 10: ')






