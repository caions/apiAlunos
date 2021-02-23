const Aluno = require('../model/Aluno')


class AlunoController {

    async index(req, res) {
        let filters = {}

        if (req.body.idade) {
            filters = { ...filters, idade: req.body.idade }
        }

        if (req.body.status) {
            filters = { ...filters, status: req.body.status }
        }

        if (req.body.media) {
            filters = { ...filters, $and: [{ media: { $gte: req.body.media[0] } }, { media: { $lte: req.body.media[1] } }] }
        }
        console.log(filters)

        //{ $and: [{ media: { $gte: 5 } }, { media: { $lte: 8 } }] }

        //intervalo media > 5

        const alunos = await Aluno.find(filters);
        return res.json(alunos)
    }

    async store(req, res) {
        console.log(req.body)
        const { nome, notas, matricula, idade } = req.body;

        const somaNotas = notas.reduce((acc, current) => acc + current);
        const media = (somaNotas / notas.length).toFixed(1);
        const status = media >= 7 ? true : false;


        const aluno = await Aluno.create({
            nome,
            notas,
            matricula,
            idade,
            media,
            status
        });

        return res.json(aluno);
    }
}

module.exports = new AlunoController();

