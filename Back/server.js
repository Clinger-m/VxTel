
const express = require('express')
const app = express()
const cors = require('cors')
const dddService = require("./services/ddds.service") //Importando o arquivo para retornar a função com as informações do arquivo json


const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// Importando o cors, que permitirá o acesso do Front-end à API
app.use((req, res, next) => {
    //console.log('Acessando o midware!')
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST')
    app.use(cors())
    next()
})


app.get('/ddds', (req, res) => {
    const ddd = dddService.Obterddd()
    return res.json(ddd) //servindo a API
})


app.post('/calcular', function (req, res) {

    let resultado = {
        origem: req.body.origem,
        destino: req.body.destino,
        plano: req.body.planos,
        duracao: req.body.duracao
    }

    const calculado = calculo(resultado)

    res.json(
        calculado
    )
})


function calculo(data) {

    const tarifas = {
        11: {
            16: 1.90,
            17: 1.70,
            18: 0.90
        },
        16: {
            11: 2.90
        },
        17: {
            11: 2.70
        },
        18: {
            11: 1.90
        }
    }

   

    const planos = [
        {
            nomePlano: "FaleMais30",
            valor: 30
        },
        {
            nomePlano: "FaleMais60",
            valor: 60
        },
        {
            nomePlano: "FaleMais120",
            valor: 120
        }
    ]

    try {
        const semPlano =  tarifas[data.origem][data.destino] * data.duracao


    let comPlano = 0
    
    const valorPlano = planos.filter(function (item) {
        return (
            item.nomePlano == data.plano
        )
    })   

    if(data.duracao > valorPlano[0].valor){
        const tarifaPorcent = tarifas[data.origem][data.destino] + (tarifas[data.origem][data.destino] * 10 / 100)
        const res = (data.duracao - valorPlano[0].valor)
        comPlano = tarifaPorcent * res 
    }     

    resCalc = `Valor com Plano: <strong>R$${comPlano.toFixed(2)}</strong> <br> Valor sem plano: <strong>R$${semPlano.toFixed(2)}</strong>` // mudar
    
    return resCalc
        
    } catch (e) {
        return ('Algo deu errado')
    }    
}

app.listen('4567', function () {
    console.log("Servidor rodando na porta 4567")
})