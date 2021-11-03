const listaCores = ['Blue', 'DeepSkyBlue', 'Cyan', 'Aquamarine', 'Lime', 'GreenYellow', 'Magenta', 'DeepPink', 'Crimson', 'Red', 'OrangeRed']

var button = document.getElementById('button_color')
var input = document.getElementById('input_color')
var span = document.getElementById('text_color')

function numeroRandomico() {
    return Math.floor(Math.random() * listaCores.length)
}

function quandoClicar() {
    var cor

    if (input.value) {
        cor = input.value
        // Tiver algo escreito
    } else {
        // Não tiver nada escrito
        var rand = numeroRandomico()
        cor = listaCores[rand]
    }

    document.body.style.backgroundColor = cor
    span.textContent = cor

}
// FORMAS PARA ESCREVER UMA COR
// Cor em inglês: red, green, blue, yellow
// Hexadecimal: #8B0000, #FFFFFF
// RGB: rgb (139,0,0)

button.addEventListener('click', quandoClicar)
