/** Utilizando o modulo 'console', exiba mensagem no terminal, conforme enuciados abaixo.*/

/** 1. Exiba um ERROR com a mensagem: 'Mensagem de ERROR enviada por Seu_Nome'*/
console.error(new Error('Mensagem de erro enviada por Luana'))


/** 2. Exiba em forma de tabela, uma lista de profissões aleatórias */
const profissoes = ['Arquiteto', 'Contador', 'Sociologo', 'Advogado', 'Jurista', 'Designer', 'Programador']

console.table(profissoes)


/** 3. Exiba em forma de tabela, informações pessoais de Nome, Endereço, Telefone, Data de Nascimento,  CEP, Município e Estado */
/** PRIMEIRA ALTERNATIVA*/
const infoPessoal = [{nome: 'Luana', Endereço: 'Rua 08', Telefone: '61992438346', Cep: '72814030', Municipio: 'Luziania', Estado: 'Goias'}, {nome: 'Lara', Endereço: 'Rua 20', Telefone: '36214241', Cep: '72814014', Municipio: 'Gama', Estado: 'Distrito Federal'}]

console.table(infoPessoal)


/** SEGUNDA ALTERNATIVA*/
const infoPessoal2 = {
    nome: 'Luana', 
    Endereço: 'Rua 08', 
    Telefone: '61992438346', 
    Cep: '72814030', 
    Municipio: 'Luziania', 
    Estado: 'Goias'
}

console.table(infoPessoal2)