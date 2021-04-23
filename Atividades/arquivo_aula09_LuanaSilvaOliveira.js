/** Utilizando Funções assyncronas PROMISES, utilize o arquivo criado na aula anterior e realize os ajustes necessários para que, ao invés de utilizar funções de CallBack, utilize Promises. */

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

/** chamamento */
calculaSalario(salario)
.then((retorno)=>{
    console.log(`Salário do profissional, após descontos de FGTS, INSS e Vale alimentação é de: R$ ${retorno}`)
})
.catch(()=>{
    console.log(`Houve um erro`)
})
