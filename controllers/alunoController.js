const Aluno = require('../model/aluno.js')

class AlunoController {
    //READ
    async index(req, res) {
        let filters = {}
        // Adiciona o parametro ao objeto "filter" caso solicitado na requisicao

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

    //CREATE
    async store(req, res) {
        try {
            const { matricula, nome, idade, notas } = req.body;

            // soma cada elemento no array de notas e divide pelo tamanho do array
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
            })

            return res.status(200).json(aluno);

        } catch (error) {
            // Retorna um erro caso a matricula ja exista no banco
            if (error.keyValue) {
                return res.status(400).json("Matricula duplicada! Escolha um numero de matricula diferente.")
            }
            // Retorna um erro caso nao seja passado os parametros obrigatorios matricula e nome
            else if (error) {
                return res.status(400).json(error.message)
            }
        }
    }

    async remove(req,res){
        try{
            const alunoMatricula = await Aluno.findOne({matricula: req.query.matricula})
            console.log(alunoMatricula)
            await Aluno.deleteOne({matricula:alunoMatricula.matricula})

            return res.status(200).json(`${alunoMatricula.nome} removido`)
        }catch(error){
            return res.status(400).json(error.message)
        }
    }
}

module.exports = new AlunoController();