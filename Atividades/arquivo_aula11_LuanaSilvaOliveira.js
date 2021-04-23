/**  Utilizando o arquivo da aula 10, vamos criar uma variável 'textoTela', e dar o valor a ela: "Esse eh o arquivo 10 importado no arquivo 11.". Depois vamos disponibilizar para importação (usando o module.exports) apenas a variável 'textoTela' e a função 'main' (o método calculaSalario NÃO DEVE ESTAR DISPONIVEL NO ARQUIVO 11 CRIADO), que serão invocadas no arquivo da aula 11, ou seja, quando executarmos o comando node(ou nodemon) no arquivo da aula 11 criado por vocês, quero que o valor da variável 'textoTela' seja mostrado no terminal, e que após o tempo de 5 segundos de espera, a mensagem "Salário do profissional, após descontos de FGTS, INSS e Vale alimentação é de: R$ XXXXX,XX" tbm seja mostrada no terminal. */

const modulo01 = require('./arquivoAlterado_aula10_LuanaSilvaOliveira.js')

console.log(modulo01.textoTela)
modulo01.main()