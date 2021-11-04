const listaHexa = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

var button = document.getElementById('button_color')
var span = document.getElementById('text_color')

function numeroRandomico() {
    return Math.floor(Math.random() * listaHexa.length)
}

function quandoClicar() {
    document.body.style.backgroundColor = cor
    span.textContent = cor
}

button.addEventListener('click', quandoClicar)