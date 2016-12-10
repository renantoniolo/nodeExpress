// incluimos o express no projeto
var express = require('express');

// iniciamos o framework express
var app = express();

//deixa ejs responsável pelas views
app.set("view engine","ejs");

// Configuramos a rota de produtos
app.get('/produtos', function(req,resp){
  //resp.send("<html><body><h2>Rota de Produtos</h2></body></html>")
  // abre a pagina html
  resp.render("produtos/lista");
});

// Configuramos a rota de produtos
app.get('/cidades', function(req,resp){
  resp.send("<html><body><h2>Rota de Cidades</h2></body></html>")
});

// subimos o servidor
app.listen(3000,function(){
    console.log("servidor rodando");
});
