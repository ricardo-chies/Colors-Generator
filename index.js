var button = document.getElementById('button_color')
var input = document.getElementById('input_color')
var span = document.getElementById('text_color')

function quandoClicar() {
    //alert(input.value)
    var cor = input.value

    document.body.style.backgroundColor = cor
    span.textContent = cor
}

// FORMAS PARA ESCREVER UMA COR
// Cor em inglês: red, green, blue, yellow
// Hexadecimal: #8B0000, #FFFFFF
// RGB: rgb (139,0,0)

button.addEventListener('click', quandoClicar)
