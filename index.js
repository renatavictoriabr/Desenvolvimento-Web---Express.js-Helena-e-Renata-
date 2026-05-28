const express = require('express');
const app = express();

app.get('/filmes/:id/:nome', (req, res) => {
  const id = req.params.id;
  const nome = req.params.nome;
  res.send(`ID do filme: ${id}   
 Nome do filme: ${nome}`);
});

app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);