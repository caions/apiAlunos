const express = require("express")
const router = express.Router(); 
const {index,store,remove} = require("./controllers/alunoController");

// rotas aluno
router.post('/list', index);
router.post('/add', store);
router.delete('/delete', remove);

module.exports = router 