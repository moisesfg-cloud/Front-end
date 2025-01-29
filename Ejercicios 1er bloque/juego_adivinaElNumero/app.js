alert('Bienvenido al juego del número secreto')
//let se utiliza para declarar una variable, pero esta solo existe dentro de un bloque de codigo como un if o for
// Math.floor --> Hace que los números sean redondeados // Math.random --> Escoge un número entre el 0 y el 1.  
let numeroMaximoPosible = 5;
let numeroSecreto = Math.floor(Math.random()* numeroMaximoPosible + 1);
let numeroUsuario = 0;
let intentos = 1; //Se comienza en 0 para que vaya aumentando depende los ingresos de datos del usuario

//let palabraIntentos = 'intento';
let maximosIntentos = 3; // Se asigna cuantos intentos tiene el usuario

//Mientras numeroUsuario sea diferente a numero / while son bucles 
while (numeroUsuario != numeroSecreto){ 
   
    //El prompt sirve para solicitar algun dato al usuario, y el parseInt sirve para trasnformar el dato en un entero
    numeroUsuario = parseInt(prompt(`Ingresa un número mayor a 0 pero menor a ${numeroMaximoPosible}: `));
    
    //De esta manera podemos saber con que tipo de dato estamos trabajando.
    console.log(typeof(numeroUsuario));

    //El console.log se usa para imprimir un mensaje como un print 
    console.log(numeroUsuario); 
    
    /*Este codigo realiza
    la comparación*/
        //La condición se cumple
    if (numeroUsuario == numeroSecreto) {
        //Alert se usas para imprimir una cadena de texto como si fuera una alerta
        // Con las comillas invertidas podemos hacer una cadena iterable ``option + ${}, esto se llama template string 
        // Operador terniario, permite hacer una validación para saber si corresponde intento o intentos
        alert(`Acertaste, el número secreto es: ${numeroUsuario} acertaste en  ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`); 
    }else{
        if (numeroUsuario > numeroSecreto){
            alert('El número es menor')
        }else{
            alert ('El número es mayor')
        }
        //Se incrementa cuanto no acierta el usuario y se le brinda en cuantos ingresos acerto el numero
        
        //{intentos = intentos +1;
        //intentos +=1 ;}
        intentos ++;
        //palabraIntentos = 'intentos';
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número')

        //Este if funciona de tal manera que si el usuario supera los 3 intentos le muestra el mensaje y sale del while
        if(intentos > maximosIntentos){
            //De esta manera damos aviso de cuantos intentos maximos tiene el usuario y cuando se los termine 
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`)
            break;
        }
            
    }
    //Cuando agregamos un if y else dentro de un else se llaman condicionales anidados

}



