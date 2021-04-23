/** Utilizando Funções assyncronas de CALLBACK (utilize a função setTimeout() solicitando para esperar 5 segundos), crie uma função calculaSalario() que calcula o salário líquido a partir do salário bruto e uma outra função mostraSalarioLiquido() que mostre no console a mensagem: "Salário do profissional, após descontos de FGTS, INSS e Vale alimentação é de: R$ (valor retornado)".

Valores a serem utilizados no exercício:

Valor Salário bruto: 10.000,00 reais
Desconto FGTS: 15%
Desconto INSS: 11%
Desconto Vale Alimentação: 5% */

/** salario so individuo */
const salario = 10000

/** calculador de porcentagem */
const percent = salario/100

/** função assyncrona */
function calculaSalario(valor, callback){
    return setTimeout(()=>{
        return callback(null, valor-(percent*15)-(percent*11)-(percent*5))
    }, 5000)
}

/** função de callback */
function mostraSalario(erro, retorno){
    if(erro) throw erro
    console.log(`Salário do profissional, após descontos de FGTS, INSS e Vale alimentação é de: R$ ${retorno}`)
}

/** chamamento */
calculaSalario(salario, mostraSalario)
