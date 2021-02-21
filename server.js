const express = require("express")
const app = express()
const PORT = process.env.PORT || 8090;

//rodando o servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))

module.exports = app