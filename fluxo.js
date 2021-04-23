/** CALLBACK */
/** função assyncrona */
function calc(valor, callback){
    return setTimeout(()=>{
        return callback(null, 5 * valor)
    }, 2000);
}

/** função de callback */
function mostraValor(erro, retorno){
    if (erro) throw erro
    console.log(retorno)
}

/** chamamento */
calc(20, mostraValor)