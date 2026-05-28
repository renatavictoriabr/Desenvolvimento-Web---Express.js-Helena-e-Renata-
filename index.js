const express = require('express');
const app = express();

app.get('/produtos', (req, res) => {
  const categoria = req.query.categoria;
  const pagina = req.query.pagina;
  
  res.send(`Categoria: ${categoria} | Página: ${pagina}`);
});

app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);