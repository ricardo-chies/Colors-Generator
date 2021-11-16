const listaHexa = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

var button = document.getElementById('button_color')
var span = document.getElementById('text_color')

function numeroRandomico() {
    return '#' + Math.floor(Math.random() * listaHexa.length).toString(16)
}

function quandoClicar() {
    var rand = numeroRandomico()

    for (var i = 0; i < 5; i++) {
        rand += listaHexa[Math.floor(Math.random() * 16)]
    }

    document.body.style.backgroundColor = rand
    span.textContent = rand
}

button.addEventListener('click', quandoClicar)