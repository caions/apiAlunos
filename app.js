const app = require("./server")
const alunoRouter = require('./routes');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Extended: https://swagger.io/specification/#infoObject
const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            version: "1.0.0",
            title: "Customer API",
            description: "Customer API Information",
            contact: {
                name: "Caio Nascimento"
            },
            servers: ["http://localhost:8090/aluno"]
        }
    },
    // ['.routes/*.js']
    apis: ['./routes.js']
};

const swaggerSpec = swaggerJsDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.get("/", (req, res) => res.send("Gloria a Deus"))
app.use('/aluno', alunoRouter); 