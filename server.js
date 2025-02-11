const express = require('express');

require('dotenv').config();
const cors = require('cors');
const filmeRoutes = require('./src/routes/filmeRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', filmeRoutes);

app.get('/', (req, res) => {
  res.send('Tá funcionando!');
});

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});