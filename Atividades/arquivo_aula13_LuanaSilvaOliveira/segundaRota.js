const express = require('express')
const aula13Router = express.Router()

aula13Router.post('', (req, resp)=>{
    let body = req.body
    resp.send(`Informacoes do projeto.\nCurso: ${body.curso}.\nEmpresa: ${body.empresa}.\nProfessor: ${body.professor}`)
})

aula13Router.put('/:identificador', (req, resp)=>{
    resp.send(`PUT utilizado para atualizar o id: ${req.params.identificador}`)
})

aula13Router.patch('/:identificador', (req, resp)=>{
    resp.send(`PATCH utilizado para atualizar o id: ${req.params.identificador}`)
})

aula13Router.delete('/:identificador', (req, resp)=>{
    resp.send(`Metodo DELETE utilizado para atualizar o id: ${req.params.identificador}`)
})

module.exports = aula13Router