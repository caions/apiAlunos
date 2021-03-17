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
 * /aluno/delete:
 *  delete:
 *     description: Remove o aluno passado pelo parametro nome
 *     parameters:
 *       - name: nome
 *         in: query
 *         required: true
 *     responses:
 *      '200':
 *        description: Aluno removido com sucesso
 */
router.delete('/delete', remove);

router.post('/add', store);

module.exports = router 