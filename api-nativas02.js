const {EventEmitter} = require('events') /** o que está dentro das chaves IMPORTA apenas aquilo que precisamos */

const evento = new EventEmitter() /** cria o objeto/evento */

evento.on('teste', (user, msg)=>{
    console.log(`Usuario ${user} possui uma mensagem: ${msg}`)
}) /** ouvindo um evento */

evento.emit('teste', 'Thiago leite', 'Está instruindo meus hackatonions.') /** publicando o evento */
evento.emit('teste', 'Rodrigo Seixas', 'Está aprendendo.')