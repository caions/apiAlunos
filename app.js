const app = require("./server")
const alunoRouter = require('./routes/alunos');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

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