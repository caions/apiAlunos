const express = require("express")
const AlunoController = require("./controllers/AlunoController"); 
const router = express.Router();

// rotas aluno
router.post('/list', AlunoController.index);
router.post('/add', AlunoController.store);

module.exports = router 