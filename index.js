const express = require('express');
const app = express();

app.get('/produtos/:nome', (req, res) => {
  const nome = req.params.nome;
  res.send(`Produto: ${nome}`);
});

app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);