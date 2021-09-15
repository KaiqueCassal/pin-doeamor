/*----------------------------------------------------------Pré requisitos-------------------------------------------------------*/

const mysql = require('mysql');
const express = require('express');
const { request, response } = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('page/public'));

//Conexão
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'doeamor',
});

//Verificar erros
conexao.connect(function(err) {
    if (err){
        console.log("Erro");
        throw err;
    } else {
        console.log("Conectado");
    }
});

/*--------------------------------------------------------------Código-----------------------------------------------------------*/

//Manda para o cadastro
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/page/Cadastro.html');
});

/*-------------------------------------------------------------Cadastro----------------------------------------------------------*/
app.post('/cad-doador', (req, res) => {
    var emailCad = req.body.emailCad;
    var cpfCad = req.body.cpfCad;
    var nomeCad = req.body.nomeCad;
    var dataCad = req.body.dataCad;
    var generoCad = req.body.generoCad;
    var localCad = req.body.localCad;
    var numCad = req.body.numCad;
    var senhaCad = req.body.senhaCad;
    console.log(emailCad);
    console.log(cpfCad);
    console.log(nomeCad);
    console.log(dataCad);
    console.log(generoCad);
    console.log(localCad);
    console.log(numCad);
    console.log(senhaCad);

});

app.post('/cad-inst', (req, res) => {
    var emailCad = req.body.emailCad;
    var cnpjCad = req.body.cnpjCad;
    var nomeCad = req.body.nomeCad;
    var localCad = req.body.localCad;
    var numCad = req.body.numCad;
    var senhaCad = req.body.senhaCad;
    console.log(emailCad);
    console.log(cnpjCad);
    console.log(nomeCad);
    console.log(localCad);
    console.log(numCad);
    console.log(senhaCad);
});

/*--------------------------------------------------------------Login-----------------------------------------------------------*/

//Verificar Login do doador
app.post('/login-doador', (req, res) =>{
    var cpfCheck = req.body.cpfCheck;
    var senhaCheck = req.body.senhaCheck;
    console.log(cpfCheck);
    console.log(senhaCheck);

    //Verificar se existe
    /*conexao.query("SELECT * FROM doador WHERE cpf='"+cpfCheck+"'AND senha='"+senhaCheck+"", function(err, result) {
        if (err) {
            res.send("Erro");
            console.log(err);
        } else if (result.length==0) {
            res.send("CPF ou senha incorretos");
        } else {
            res.send("Logado");
        }
    })
    conexao.end();*/
});

//Verificar Login da instituição
app.post('/login-inst', (req, res) => {
    var cnpjCheck = req.body.cnpjCheck;
    var senhaCheck = req.body.senhaCheck;
    console.log(cnpjCheck);
    console.log(senhaCheck);
});

//Mostra usuários cadastrados
conexao.query('SELECT * FROM doador', (function (err, rows) {
    if (err) throw err;
    console.log('Doador: ', rows);
}));





//Iniciar
app.listen('3000', function() {
    console.log("Started on port 3000");
});
