/** Utilizando Funções assyncronas ASYNC/AWAIT, utilize o arquivo criado na aula anterior e realize os ajustes necessários para que a implementação da aula anterior seja feita utilizando ASYNC/AWAIT. */

/** salario so individuo */
const salario = 10000

/** calculador de porcentagem */
const percent = salario/100
const FGTS = percent*15
const INSS = percent*11
const ValeAlimentacao = percent*5

/** função assyncrona */
function calculaSalario(valor){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(valor - FGTS - INSS - ValeAlimentacao)
        }, 5000)
    })
   
}

async function main(){
    try{
        let retorno = await calculaSalario(salario)
        console.log(`Salário do profissional, após descontos de FGTS, INSS e Vale alimentação é de: R$ ${retorno}`)
    } catch(error){
        console.log(`Algo deu errado ${error}`)
    }
}

main()
