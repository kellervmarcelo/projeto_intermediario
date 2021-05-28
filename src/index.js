const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const routes = require('./api/routes/index');

app.use('/api', routes)

app.get('/', function(req, res){
  res.send('Api referente ao projeto intermediário de ppw2. Os endpoints são /api/charts e /api/langs. É possível fazer a query "langs?lang=<nomedalinguagem>" para procurar uma linguagem específica e "charts?song=<nomedamusica> para procurar uma musica especifica"')
})

app.get('*', function(req, res){
  res.redirect('/')
})

app.listen(PORT, () => {
  console.log(`App iniciado e ouvindo na porta http://localhost:${PORT}`);
});
