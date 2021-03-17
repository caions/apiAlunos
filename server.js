const express = require("express")
const app = express()
const mongoose = require('mongoose')
var cors = require('cors');

app.use(
    cors({
        credentials: true,
        origin: true
    })
);
app.options('*', cors());

const PORT = process.env.PORT || 8090
;

mongoose.connect('mongodb+srv://transitar:senhaTransitar@cluster0.4kq1d.mongodb.net/transitarDb?retryWrites=true&w=majority', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// habilita requisicoes via JSON
app.use(express.json());

//rodando o servidor
app.listen(PORT, () => console.log(`Servidor rodando na rota http://localhost:${PORT}`))

module.exports = app

