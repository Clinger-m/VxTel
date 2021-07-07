const data = require("../repository/ddds.repository.json") // Importando as informações do arquivo json

 function Obterddd(){ // Criando a função para retornar as infos do json 
    const ddds = data
    return ddds
}

module.exports = { // Exportando a função para ser usada em outro arquivo
    Obterddd
}