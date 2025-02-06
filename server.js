const express = require('express');
const cors = require('cors');
const filmeRoutes = require('./src/routes/filmeRoutes');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use('/filmes', filmeRoutes);

app.get('/', (req, res) => {
  res.send('Tá funcionando!');
});

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});