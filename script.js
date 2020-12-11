function enviar(){

var nome = document.getElementById('nome');
var telefone = document.getElementById('telefone');
var email = document.getElementById('email');
var msg = document.getElementById('msg');


    if(nome.value == "" || nome.isEmpty()){
        alert('Preencha o campo Nome')
    }

    if(telefone.value == ""){
        alert('Preencha o campo Telefone')
    }
    
    if(email.value == ""){
        alert('Preencha o campo E-mail')
    }

    if(msg.value == ""){
        alert('Digite a sua Mensagem')
    }
}