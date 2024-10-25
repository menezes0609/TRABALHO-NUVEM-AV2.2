const express = require("express");
const app = express();

// Criando minha primeira rota ou ROTA PRINCIPAL
app.get("/",function(req,res){
    res.send(`
    <html>
      <head><title></title></head>
      <body>
        <h1>Página Inicial!(editando aqui para o commit)</h1>
        <p>Esta é a rota principal da aplicação.</p>
      </body>
    </html>
  `);
});

// Segunda Rota
app.get("/rota2", function(req,res){
    res.send(`
    <html>
      <head><title></title></head>
      <body>
        <h1>Sobre a Aplicação</h1>
        <p>aplicação foi criada para demonstrar rotas em Node</p>
      </body>
    </html>
  `);
});

// Terceira Rota 
app.get("/rota3", function(req,res){
    res.send(`
    <html>
      <head><title></title></head>
      <body>
        <h1>Terceira rota !!</h1>
        <p>Ultima rota é aqui..</p>
      </body>
    </html>
  `);
});

// função call-back
app.listen(5000,function(){
    console.log("Rodando o servidor na URL http://localhost5000")
});