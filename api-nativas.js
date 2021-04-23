/** o http importa um modulo para ser utilizado na nossa implementação */
const http = require('http')

const host = '127.0.0.1'
const port = '3000' /** porta default */
const url = `http://${host}:${port}`

const server = http.createServer((req, resp) => {
    resp.statusCode = 200
    /** 200 = sucesso
     * 500 = erro de servidor
     * 404 = página não encontrada
     * ...
     */

    resp.setHeader('Content-type', 'text/html')
    /** setHeader vai mostrar informações
     * por default 'content' é um texto puro
     */

    resp.end('<h1>Ola, galera!</br>Aqui estamos no curso de Node JS.</h1>')
    /** vai finalizar a resposta */
})

server.listen(port, host, ()=>{
    console.log(`Server: ${url} is running...`)
})
