require('dotenv').config()
//importamos o express
const express = require('express')

const { OpenAI } = require('openai')
//construímos o objeto que viabiliza a especificação de endpoints
const app = express()
//aplicamos o middleware de transformação JSON
app.use(express.json())
const OPENAI_API_KEY = process.env.OPENAI_API_KEY
//especificamos o endpoint de interesse
//POST /pergunte-ao-chatgpt
app.post('/pergunte-ao-chatgpt', (req, res) => {
    const openai = new OpenAI(OPENAI_API_KEY)
    res.json({mensagem: 'OK'})
})

app.get('/oi', (req, res) => {
    let nome = req.query.nome
    res.json({msg: `Oi, ${req.query.nome}`})
})

//colocamos o servidor em execução na porta 3000
const PORT = 3
app.listen(PORT, () => {
    console.log(`Em execução na porta ${PORT}`)
}