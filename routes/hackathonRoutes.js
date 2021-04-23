const express = require('express')
const hackathonRouter = express.Router()

hackathonRouter.get('/:identificador', (req, resp)=>{
    resp.send(`Dados do hackathon ${req.params.identificador}`)
})

hackathonRouter.post('', (req, resp)=>{
    let body = req.body
    resp.send(`Informacoes de usuario. Nome: ${body.nome}.`)
})

hackathonRouter.put('/:identificador', (req, resp)=>{
    resp.send(`Dados do hackathon ${req.params.identificador}`)
})

hackathonRouter.patch('/:identificador', (req, resp)=>{
    resp.send(`Dados do hackathon ${req.params.identificador}`)
})

hackathonRouter.delete('/:identificador', (req, resp)=>{
    resp.send(`Dados do hackathon ${req.params.identificador}`)
})

module.exports = hackathonRouter