const app = require("./server")
const aluno = require('./routes');

app.use('/aluno', aluno);