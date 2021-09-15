//Impede a página de recarregar ao clicar SUBMIT
const forms = document.querySelectorAll("form");

for (i=0; i<forms.length; i++) {   
    forms[i].addEventListener("submit", function(evt) {
        evt.preventDefault();
    })
}
    
/*--------------------------------------------------------Cadastro------------------------------------------------------------*/

//Verificar Cadastro
function abrirCad() {
    var vef = document.getElementsByName("optCad");

    for (i=0; i<vef.length; i++){
        if (vef[i].checked){
            var checkVef = vef[i].value;
            if (checkVef == "Doador"){
                $('#cadVerificar').modal('hide');
                $('#cadDoador').modal('show');

            } else if (checkVef == "Instituicao"){
                $('#cadVerificar').modal('hide');
                $('#cadInst').modal('show');
            }
        }
    }
}

//Cadastro doador
function cadDoador() {
    var email = document.getElementById("emailDoador").value;
    var cpf = document.getElementById("cpf").value;
    var nome = document.getElementById("nomeDoador").value;
    var data = document.getElementById("dataDoador").value;
    var genero = document.getElementById("sexo").value;

    //localização
    var est = document.getElementById("estadoDoador").value;
    var cidade = document.getElementById("cidadeDoador").value;
    var rua = document.getElementById("ruaDoador").value;
    var localNum = document.getElementById("localNumDoador").value;
    var fullLocal = (est+", "+cidade+", "+rua+", "+localNum);

    //telefone
    var ddd = parseInt(document.getElementById("dddDoador").value);
    var num = parseInt(document.getElementById("numDoador").value);
    var fullNum = ("("+ ddd +") "+ num);

    var senha = document.getElementById("senhaDoador").value; 

    //Mandar para o Node
    $.ajax({
        url: "cad-doador",
        method: "POST",
        data: {
            emailCad: email,
            cpfCad: cpf,
            nomeCad: nome,
            dataCad: data,
            generoCad: genero,
            localCad: fullLocal,
            numCad: fullNum,
            senhaCad: senha,
        },
        success: function (response) {
            console.log(response);
        },
        error: function (err) {
            console.log(err);
        }
    });
}

//Cadastro instituição
function cadInst() {
    var email = document.getElementById("emailInst").value;
    var cnpj = document.getElementById("cnpj").value;
    var nome = document.getElementById("nomeInst").value;

    //localização
    var est = document.getElementById("estadoInst").value;
    var cidade = document.getElementById("cidadeInst").value;
    var rua = document.getElementById("ruaInst").value;
    var localNum = document.getElementById("localNumInst").value;
    var fullLocal = (est+", "+cidade+", "+rua+", "+localNum);

    //telefone
    var ddd = parseInt(document.getElementById("dddInst").value);
    var num = parseInt(document.getElementById("numInst").value);
    var fullNum = ("("+ ddd +") "+ num);

    var senha = document.getElementById("senhaInst").value;

    //Mandar para o Node
    $.ajax({
        url: "cad-inst",
        method: "POST",
        data: {
            emailCad: email,
            cnpjCad: cnpj,
            nomeCad: nome,
            localCad: fullLocal,
            numCad: fullNum,
            senhaCad: senha,
        },
        success: function (response) {
            console.log(response);
        },
        error: function (err) {
            console.log(err);
        }
    });
}

/*--------------------------------------------------------Login------------------------------------------------------------*/

//Verificar Login
function abrirLog() {
    var vef = document.getElementsByName("optLog");

    for (i=0; i<vef.length; i++){
        if (vef[i].checked){
            var checkVef = vef[i].value;
            if (checkVef == "Doador"){
                $('#logVerificar').modal('hide');
                $('#logDoador').modal('show');

            } else if (checkVef == "Instituicao"){
                $('#logVerificar').modal('hide');
                $('#logInst').modal('show');
            }
        }
    }
}


//Login doador
function logDoador() {
    var cpf = document.getElementById("logCPF").value;
    var senha = document.getElementById("logSenhaDoador").value;

    //Mandar para o Node
    $.ajax({
        url: "login-doador",
        method: "POST",
        data: {
            cpfCheck: cpf,
            senhaCheck: senha,
        },
        success: function (response) {
            console.log(response);
        },
        error: function (err) {
            console.log(err);
        }
    });
}

//Login instituição
function logInst() {
    var cnpj = document.getElementById("logCNPJ").value;
    var senha = document.getElementById("logSenhaInst").value;

    //Mandar para o Node
    $.ajax({
        url: "login-inst",
        method: "POST",
        data: {
            cnpjCheck: cnpj,
            senhaCheck: senha,
        },
        success: function (response) {
            console.log(response);
        },
        error: function (err) {
            console.log(err);
        }
    });
}