const { Schema, model } = require('mongoose')

const AlunoSchema = new Schema({
    matricula: {
        type: Object,
        required: true,
    },
    nome: {
        type: String,
        required: true
    },
    nota1: {
        type: Number
    },
    nota2: {
        type: Number
    },
    nota3: {
        type: Number
    }
}, { collection: 'Alunos' });

const Aluno = model('Aluno', AlunoSchema)

module.exports = Aluno