const express = require("express")
const mongoose = require("mongoose")
const router = express.Router();
const AlunoController = require("./controllers/alunoController")

router.get('/', async function (req, res) {
    //res.send("Gloria Gloria Aleluia!")
    let vai = await AlunoController.listAluno()
    res.send(vai)
});

router.post('/', async function (req, res) {
    let aluno = {
        nome: "clau",
        matricula: 1212,
        nota: 10
    }

    await AlunoController.addAluno(aluno)
    
});

module.exports = router