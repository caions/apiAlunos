const app = require("./server")
const aluno = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => res.send("Gloria a Deus"))
app.use('/aluno', aluno);