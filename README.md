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

```json
{
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^1.0.2",
    "uuid": "^11.0.5"
  },
  "devDependencies": {
    "nodemon": "^3.1.9"
  }
}
```
Instale-as com:
```bash
npm install
```
## **4. Formato JSON**
A API utiliza JSON para enviar e receber dados. Exemplos:

### **Criar Filme (POST /api/filmes)**
```json
{
  "nome": "O Diário da Princesa",
  "genero": "Comédia",
  "diretor": "Garry Marshall",
  "ano": 2001
}
```

### **Resposta de Sucesso**
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "nome": "O Diário da Princesa",
  "genero": "Comédia",
  "diretor": "Garry Marshall",
  "ano": 2001
}
```

## **5. Formato XML**
Embora JSON seja o principal formato, um exemplo de estrutura em XML seria:

```xml
<filme>
  <nome>O Diário da Princesa</nome>
  <genero>Comédia</genero>
  <diretor>Garry Marshall</diretor>
  <ano>2001</ano>
</filme>
```
## **6. Testes com Postman**

Uma coleção de requisições foi criada para testar a API no Postman. 

Endpoints:
- **POST /api/filmes**: Cria um novo filme.
- **GET /api/filmes**: Retorna todos os filmes.
- **GET /api/filmes/:id**: Retorna um filme específico.
- **PUT /api/filmes/:id**: Atualiza informações de um filme.
- **DELETE /api/filmes/:id**: Remove um filme.





