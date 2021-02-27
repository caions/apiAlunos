const { Schema, model } = require('mongoose')

const AlunoSchema = new Schema({
    matricula: {
        type: Number, 
        required: true,
        unique : true
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
    aprovado: {
        type: Boolean
    }
}, { collection: 'Alunos' });

const Aluno = model('Aluno', AlunoSchema)

module.exports = Aluno