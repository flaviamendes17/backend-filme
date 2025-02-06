## **1. Diagrama de Classe**
O diagrama abaixo representa as entidades do sistema e seus relacionamentos:

![Diagrama de Classe](./img/diagrama%20de%20classes%20(1).jpg)

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

