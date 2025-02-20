// Função adiciona ao display da calculadora o botom presionado
function addAoDisplay(value) {
    document.getElementById("display").value += value
}

function addCalculoDisplay() {
   calculo =  eval(document.getElementById("display").value)
   document.getElementById("display").value  = calculo
}

function limpaDisplay() {
    document.getElementById("display").value = ""
}