
async function getContent() {
    try {
        const response = await fetch('http://localhost:4567/ddds/')
        const data = await response.json()
        show(data)
        
    } catch (error) {
        console.error(error)
    }
}

getContent()

function show(ddds) {
  
    
    /*---- Pegando os dados da origem ----*/
    ddds.origem.map((ddd) => {
        let listaOrigem = document.getElementById("origem")
        novoItemOrigem = document.createElement("option")
        novoItemOrigem.value = ddd
        novoItemOrigem.textContent = ddd
        listaOrigem.appendChild(novoItemOrigem) 
            
    }) 

    /*for(let ddd in ddds.origem){
        let lista = document.getElementById("origem")
        let novoItem = document.createElement("option")    
        novoItem.textContent = ddds.origem[ddd]
        lista.appendChild(novoItem)    
    }*/

    /*---- Pegando os dados do destino ----*/
    for (let ddd in ddds.destino) {
        let listaDestino = document.getElementById("destino")
        novoItemDestino = document.createElement("option")
        novoItemDestino.value = ddds.destino[ddd]
        novoItemDestino.textContent = ddds.destino[ddd]
        listaDestino.appendChild(novoItemDestino)
         
    }

    /*---- Pegando os dados dos planos ----*/
    for (let ddd in ddds.planos) {
        let lista = document.getElementById("planos")
        let novoItem = document.createElement("option")
        novoItem.textContent = ddds.planos[ddd]
        lista.appendChild(novoItem)
    }
}




