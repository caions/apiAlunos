const Aluno = require('../model/Aluno')

class AlunoController {

    async index(req, res) {
        let filters = {}

        if (req.body.matricula) {
            filters = { ...filters, matricula: req.body.matricula }
        }
        
        if (req.body.nome) {
            filters = { ...filters, nome: req.body.nome }
        }

        if (req.body.idade) {
            filters = { ...filters, idade: req.body.idade }
        }

        if (req.body.aprovado) {
            filters = { ...filters, aprovado: req.body.aprovado }
        }

        if (req.body.media) {
            filters = { ...filters, $and: [{ media: { $gte: req.body.media[0] } }, { media: { $lte: req.body.media[1] } }] }
        }

        const alunos = await Aluno.find(filters);
        return res.json(alunos)
    }

    async store(req, res) {
        const { matricula, nome, idade, notas } = req.body;

        const somaNotas = notas.reduce((acc, current) => acc + current);
        const media = (somaNotas / notas.length).toFixed(1);
        const aprovado = media >= 7 ? true : false;

        const aluno = await Aluno.create({
            matricula,
            nome,
            idade,
            notas,
            media,
            aprovado
        });

        return res.json(aluno);
    }
}

module.exports = new AlunoController();