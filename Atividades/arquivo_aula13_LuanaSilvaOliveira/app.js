/** Utilizando as informações passadas nas Aulas 12 e 13, 
 -* vamos criar o arquivo app.js, 
 -* importar  o modulo 'express e 
 -* criar um servidor web, utilizando a porta 1357, 
 * que mostre no navegador (através de uma rota GET direcionada para a index do projeto) uma tabela utilizando tags HTML formatado conforme sua escolha, com as colunas ID, METODO HTTP, DESCRICAO(nesta coluna quero que mostrem a utilização do método HTTP)

EX:  1 |  GET |  utilizado para realizar consultas

Teremos que incluir nesta tabela os metodos HTTP Abaixo:
GET
POST
PUT
PATCH
DELETE

* Depois teremos que criar um arquivo de rotas (segundaRota.js) para os métodos PUT, POST, PATCH e DELETE, conforme o arquivo de teste de requisição disponibilizado neste Exercício.
As mensagens a serem mostradas na requisição aos métodos acima descritos estão nos comentários das requisições, no arquivo anexo.
Lembre-se que este arquivo de rotas criado PRECISA SER DISPONIBILIZADO no arquivo app.js, ou seja, o express precisa ser "avisado" que terá que usar esse arquivo de rotas.

Precisamos também mostrar uma mensagem no terminal, informando o endereço completo que o servidor web esta sendo executado. */

const express = require('express')
const app = express()
const aula13Router = require('./segundaRota')

app.use(express.json())
app.use('/hackathon', aula13Router)


app.get('/', (req, resp)=>{
    resp.sendFile('/index.html', {root: __dirname})
})

app.listen(1357, ()=>{
    console.log('Server is running in port 1357. Adress: http://localhost:1357')
})