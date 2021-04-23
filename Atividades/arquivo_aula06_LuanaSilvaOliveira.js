/** Utilizando o modulo 'events', crie um objeto evento que recupere uma publicação, passando .como parâmetros o nome e a data de nascimento do aluno, e mostre no terminal, as informações recuperadas em formato de tabela. */

const{EventEmitter} = require('events')

const evento = new EventEmitter

let alunos = [];

evento.on('Recuperacao', (nome, nascimento)=>{
    alunos.push([nome, nascimento])
    console.table(alunos)
})

evento.emit('Recuperacao', 'Luana', '12/12/2000')
evento.emit('Recuperacao', 'Leticia', '18/10/1998')
evento.emit('Recuperacao', 'Leonilda', '21/05/1981')