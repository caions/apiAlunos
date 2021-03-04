const express = require("express")
const AlunoController = require("./controllers/alunoController");
const router = express.Router(); 

// rotas aluno
router.post('/list', AlunoController.index);
router.post('/add', AlunoController.store);

module.exports = router 