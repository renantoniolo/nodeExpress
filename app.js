// incluimos o express no projeto
var express = require('express');

// iniciamos o framework express
var app = express();

// Configuramos a rota de produtos
app.get('/produtos', function(req,resp){
  resp.send("<html><body><h2>Rota de Produtos</h2></body></html>")
});

// Configuramos a rota de produtos
app.get('/cidades', function(req,resp){
  resp.send("<html><body><h2>Rota de Cidades</h2></body></html>")
});

// subimos o servidor
app.listen(3000,function(){
    console.log("servidor rodando");

});
