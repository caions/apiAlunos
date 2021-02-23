const { Schema, model } = require('mongoose')

const AlunoSchema = new Schema({
    matricula: {
        type: Number,
        required: true,
    },
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: String
    },
    notas: {
        type: Array
    },
    media: {
        type: Number
    },
    status: {
        type: Boolean
    }
}, { collection: 'Alunos' });

const Aluno = model('Aluno', AlunoSchema)

module.exports = Aluno