/*
Case sensitive = Reconhece as letras maiúsculas e minúsculas das palavras reservadas

por Tag = getElementByTagName()
Por Id =  getElementById()
por nome= getElementsByName()
Por Classe = getElementsByClassName()

*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let comentario = document.querySelector('#comentario')

function validaNome() {

    let txt = document.querySelector('#txtName')
    if(nome.value.length < 3) {
        txt.innerHTML = 'Nome invalido!'
        txt.style.color = 'red'   
    }else{
        txt.innerHTML = "Nome válido"
        txt.style.color = 'green'
    }
}

function validaEmail(){
let txtEmail = document.querySelector('#txtEmail')

if (email.value.indexOf('@') == -1 || email.value.indexOf('.')){
    txtEmail.innerHTML = 'E-mail Inválido'
    txtEmail.style.color = 'red'
} else {

    txtEmail.innerHTML = "E-mail válido"
    txtEmail.style.color = 'green'
}
}

function validaComentario(){

    let txtComentario = document.querySelector('#txtComentario')

    if(comentario.value.length < 10){
        txtComentario.innerHTML = 'Comentario invalido!'
        txtComentario.style.color = 'red'   
    }else{
        txtComentario.innerHTML = "Já pode Enviar!"
        txtComentario.style.color = 'green'
}
}


