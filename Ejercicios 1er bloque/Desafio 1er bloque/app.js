let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del desafio"

function clickConsola(){
    alert('El botón fue clicado')
}

function clickPrompt(){
    let pregunta = (prompt("Dime una ciudad de brasil: "))
    alert(`Estuve en ${pregunta} y me acordé de ti.`)
}

function clickJs(){
    alert('Yo amo JS')
}

function clickSuma(){
    let num1 = parseInt(prompt('Dame un número: '))
    let num2 = parseInt(prompt('Dame otri número: '))
    alert(`La suma de ${num1} y ${num2} es igual a = ${num1 + num2} `)
}
