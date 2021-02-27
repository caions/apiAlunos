const app = require("./server")
const aluno = require('./routes');

app.get("/",(req,res)=>res.send("Gloria a Deus"))
app.use('/aluno', aluno);