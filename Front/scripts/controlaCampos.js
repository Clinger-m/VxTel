
const origem = document.getElementById('origem')
const destino = document.getElementById('destino')

function desabilitaOpcao() {

    if (origem.value == "11") {
       destino.className = "form-select"

    } else if (origem.value == "16") {
        destino.value = 11
        destino.className = "form-select readonly"

    } else if (origem.value == "17") {
        destino.value = 11
        destino.className = "form-select readonly"

    } else if (origem.value == "18") {
        destino.value = 11
        destino.className = "form-select readonly"
    } else {
        destino.className = "form-select"
    }
}

origem.addEventListener('input', desabilitaOpcao)