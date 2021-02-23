# REST API com Node.js, Express.js, Mongoose e MongoDB.

## REST API endpoints

### API 1 - `localhost:8090/aluno/add`

Cadastra um aluno no banco, passando matricula, nome, idade e array de notas em seguida retorna aprovado se a nota for >= 7.

+ Method: `POST`
+ URL: `/aluno/add`

Requisição via body/JSON

Exemplo:

Requisiçao

```js
{
	"matricula": 3322,
	"nome": "Caio",
	"idade": 33,
	"notas": [
		8.5,
		7.9,
		10
	]
}
```
Resposta
```js
{
  "notas": [
    8.5,
    7.9,
    10
  ],
  "_id": "603561c9951bbb3018bfddf2",
  "matricula": 3322,
  "nome": "Caio",
  "idade": "33",
  "media": 8.8,
  "aprovado": true,
  "__v": 0
}
```

### API 2 - `localhost:8090/aluno/list`

Retorna os alunos já cadastrados, é possivel a filtragem de dados pela matricula, nome, idade e/ou intervalo de notas.

+ Method: `POST`
+ URL: `/alunos/list`

Requisição via body/JSON

Exemplo filtrando notas entre 6 e 10:

```js
{
	"media": [
		6,10
	]
}
```

## Instalação

No arquivo raiz execute `npm install` para baixar as dependências

Em seguida execute `npm start` para rodar a aplicação
