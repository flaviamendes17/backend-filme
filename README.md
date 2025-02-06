## **1. Diagrama de Classe**
O diagrama abaixo representa as entidades do sistema e seus relacionamentos:

![Diagrama de Classe](./img/diagrama%20de%20classes%20(2).jpg)

- **Filme**: Entidade principal, com propriedades como `id`, `nome`, `gênero`, `diretor` e `ano`.
- **FilmeList**: Gerencia uma lista de filmes e operações CRUD.

## **2. Arquitetura MVC**
O projeto está organizado seguindo o padrão MVC:

```
src/
├── controllers/
│   ├── filmeController.js
├── models/
│   ├── filme.js
│   ├── filmeList.js
├── routes/
│   ├── filmeRoutes.js
├── server.js
```
- **Models**: Define as classes e lógica de dados.
- **Controllers**: Contém as funções que lidam com as requisições e respostas.
- **Routes**: Gerencia as rotas da API.

## **3. Dependências**
As seguintes dependências são usadas no projeto:
"dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "expresse": "^1.0.2",
    "nodemon": "^3.1.9",
    "uuid": "^11.0.5"
  }
