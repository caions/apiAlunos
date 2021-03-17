const app = require("./server")
const aluno = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Extended: https://swagger.io/specification/#infoObject
const options = {
    definition: {
        info: {
          version: "1.0.0",
          title: "Alunos API",
          description: "Alunos API Information",
          contact: {
            name: "Amazing Developer"
          },
          url: ["http://localhost:8090/"]
        }
      },
    // ['.routes/*.js']
    apis: ['./routes/*.js']
};

const swaggerSpec = swaggerJsDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.get("/", (req, res) => res.send("Gloria a Deus"))
app.use('/aluno', alunoRouter); 