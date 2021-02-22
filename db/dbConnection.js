const mongoose = require('mongoose');

const mongoUri = {
    authentication: "mongodb+srv://transitar:senhaTransitar",
    cluster: "@cluster0.4kq1d.mongodb.net/",
    dataBase: "transitarDb",
    options: "?retryWrites=true&w=majority"
}

const { authentication, cluster, dataBase, options } = mongoUri

const conexao = mongoose.connect(
    authentication +
    cluster +
    dataBase +
    options,
    { useNewUrlParser: true, useUnifiedTopology: true }
).catch((err)=>console.log("erro ao conectar no banco "+err))

module.exports = conexao