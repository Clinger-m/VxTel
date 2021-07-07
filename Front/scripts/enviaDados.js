
const resultado = document.getElementById("resultado")

document.usuarioForm.onsubmit = async e => {
    e.preventDefault();

    const form = e.target
    const data = new FormData(form)

    const options = {
        method: form.method,
        body: new URLSearchParams(data)
    }

    try {
        const resp = await fetch('http://localhost:4567/calcular', options)
        const data = await resp.json()
        console.log(data)
        
        resultado.innerHTML = data

    } catch (e) {
        resultado.innerHTML = e
    }  

}



