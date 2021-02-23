const express = require("express")
const router = express.Router();

const AlunoController = require("./controllers/AlunoController");
// LIST
router.post('/list', AlunoController.index);
router.post('/add', AlunoController.store);

module.exports = router