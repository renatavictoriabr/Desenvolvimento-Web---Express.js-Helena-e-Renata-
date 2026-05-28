const express = require('express');
const app = express();

app.get('/sobre', (req, res) => {
  res.send('Esta é uma aplicação Express.js criada para demonstrar o funcionamento de rotas e o uso do framework Node.js.');
});

app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);