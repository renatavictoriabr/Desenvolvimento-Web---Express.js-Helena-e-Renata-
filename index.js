const express = require('express');
const app = express();

app.get('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  res.send(`ID do usuário: ${id}`);
});

app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);