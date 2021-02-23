const app = require("./server")
var aluno = require('./routes');

app.use('/aluno', aluno);