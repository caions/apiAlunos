const Aluno = require('../model/Aluno')
const conexao = require("../db/dbConnection")
const mongoose = require("mongoose")

//CREATE
const addAluno = async (aluno) => {

    try {
        let novoAluno = {
            matricula: aluno.matricula,
            nome: aluno.nome,
            nota: aluno.nota
        }
        await conexao.then(() => {
            const modelInstance = new Aluno(novoAluno);
            return modelInstance.save().then(console.log("aluno salvo com sucesso"))
        })
        mongoose.connection.close()

    }
    catch (error) {
        console.log(error)
    }
}

// List
const listAluno = async () => {

    try {
        await conexao
        return await Aluno.find()

    }
    catch (error) {
        console.log(error)
    }
}

module.exports = {
    addAluno,
    listAluno
}


