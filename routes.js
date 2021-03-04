const express = require("express")
<<<<<<< HEAD
const AlunoController = require("./controllers/alunoController");
const router = express.Router(); 
=======
const AlunoController = require("./controllers/alunoController"); 
const router = express.Router();
>>>>>>> main

// rotas aluno
router.post('/list', AlunoController.index);
router.post('/add', AlunoController.store);

module.exports = router 