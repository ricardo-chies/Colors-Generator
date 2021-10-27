const listaCores = ['blue, DeepSkyBlue, Cyan, Aquamarine, Lime, GreenYellow, Magenta, DeepPink, Crimson, Red, OrangeRed']

var button = document.getElementById('button_color')
var input = document.getElementById('input_color')
var span = document.getElementById('text_color')

function quandoClicar() {
    var cor = input.value

    if(input.value) {
        // Tiver algo escreito

    } else {
        // Não tiver nada escrito
    }

    document.body.style.backgroundColor = cor
    span.textContent = cor
}

// FORMAS PARA ESCREVER UMA COR
// Cor em inglês: red, green, blue, yellow
// Hexadecimal: #8B0000, #FFFFFF
// RGB: rgb (139,0,0)

button.addEventListener('click', quandoClicar)
