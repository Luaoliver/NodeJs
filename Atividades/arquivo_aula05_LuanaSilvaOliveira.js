const http = require('http')

const host = '127.0.0.1'
const port = '9876'
const url = `http://${host}:${port}`

const server = http.createServer((req, resp)=>{
    resp.statusCode = 200
    resp.setHeader('Content-type', 'text/html')
    resp.end('<h1>Luana Silva Oliveira.</h1></br><h2>O meu maior objetivo com o hackathon e poder aproveitar ao maximo os conhecimentos aqui passados, como tambem usufruir da interacao e conexao entre colegas, sendo possivel criar uma rede de apoio entre profissionais que buscam objetivos em comum.</br>Em relacao ao curso de NodeJS, acredito que possa agregar muito valor ao meu curriculo profissional. Anteriormente em um hackathon da ccr pude ter meu primeiro contato com esse tipo de codigo aberto, o que me foi extremamente vantajoso pois consegui reconhecer que me agrada. Desde entao venho sempre buscando mais aprendizado.</h2>')
})

server.listen(port, host, ()=>{
    console.log(`Server ${url} is running...`)
})