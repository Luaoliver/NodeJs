/** PROMISSES */

/** função assyncrona */
function calc(valor){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(5*valor)
        }, 2000)
    })
}

calc(10)
/** passe por asqui caso tudo dê certo */
.then((retorno)=>{
    console.log(`Valor de retorno: ${retorno}`)
})
/** passe por aqui caso algo dê errado */
.catch((error)=>{
    console.log(`Valor de erro: ${error}`)
})