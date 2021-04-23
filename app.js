const express = require('express')
const app = express()
const hackathonRouter = require('./routes/hackathonRoutes')


app.use(express.json()) /**a partir do metodo post se utiliza isso */
app.use('/hackathon', hackathonRouter)

app.get('/', (req, resp)=>{
    resp.send('Projeto Hackathon stefanini')
})

app.listen(3000, ()=>{
    console.log('Server is running...')
})