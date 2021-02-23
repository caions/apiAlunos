const express = require("express")
const app = express()
const mongoose = require('mongoose')

const PORT =  8090;

mongoose.connect('mongodb+srv://transitar:senhaTransitar@cluster0.4kq1d.mongodb.net/transitarDb?retryWrites=true&w=majority', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// habilita requisicoes via JSON
app.use(express.json());

//rodando o servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))

module.exports = app

