//Aqui se declara la variable que almacena el numero secreto generado en la funcion 
let numeroSecreto = generarNumeroSecreto(); //Hambito o alcance de bloque

console.log(numeroSecreto);

//Este bloque asigna mediante un elemtento y el texto titutlo y parrafo
function asignarTexoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento); //Te permite entrar a cada uno de los elementos
    elementoHTML.innerHTML = texto;
}

//Este bloque te hace saber mediante una alerta que hiciste click en el botón
//Asi se crean funciones
function intentoDeUsuario(){
    alert('Click desde el botón');
    return;
}

//Este bloque genera el número secreto
function generarNumeroSecreto(){
    return Math.floor(Math.random()* 10)+1; 
  }

//Este bloque es la continuación desde la linea 5 a la 9
asignarTexoElemento('h1','Bienvenido al juego del número secreto') //De esta manera automatizamos el proceso de estar definiendo variables y por medio de una sola funcion podemos hacer todo 
asignarTexoElemento('p','Ingresa un número del 1 al 10')

