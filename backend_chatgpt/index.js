require('dotenv').config()
//importamos o express
const express = require('express')
//construímos o objeto que viabiliza a especificação de endpoints
const app = express()
//aplicamos o middleware de transformação JSON
app.use(express.json())
const OPENAI_API_KEY = process.env.OPENAI_API_KEY
//especificamos o endpoint de interesse
//POST /pergunte-ao-chatgpt
app.post('/pergunte-ao-chatgpt', (req, res) => {
//respondemos um 'ok' só para testar
res.send('ok')
})
//colocamos o servidor em execução na porta 4000
const PORT = 4000
app.listen(PORT, () => console.log(`Em execução na porta ${PORT}`))