const express = require("express")
const router = express.Router(); 
const {index,store} = require("../controllers/alunoController");

/**
 * @swagger
 * /aluno/list:
 *    post:
 *      description: Use to return all customers
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '201':
 *        description: Successfully created user
 */
router.post('/list', index);
router.post('/add', store);

module.exports = router 