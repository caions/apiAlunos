const express = require("express")
const router = express.Router(); 
const {index,store,remove} = require("../controllers/alunoController");

/**
 * @swagger
 * /aluno/list:
 *  post:
 *     description: Retorna todos os Alunos
 *     responses:
 *      '200':
 *        description: Todos os alunos
 */
router.post('/list', index);

/**
 * @swagger
 * /aluno/add:
 *  post:
 *     description: Retorna todos os Alunos
 *     responses:
 *      '200':
 *        description: Todos os alunos
 */
router.post('/add', store);
router.post('/delete', remove);

module.exports = router 