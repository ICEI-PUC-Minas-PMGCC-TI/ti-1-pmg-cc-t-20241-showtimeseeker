function logar (){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    var ED_logado = false;
    // Recupera o objeto do localStorage
    var objetoArmazenado = localStorage.getItem('usuario');

    // Converte o objeto de volta para um objeto 
    var objetoJS = JSON.parse(objetoArmazenado);

    //armazenar os valores das classes em uma variavel
    var ED_senha_correta = objetoJS.senha;
    var ED_usuario_correto = objetoJS.username; 
    

    if(login == ED_usuario_correto && senha == ED_senha_correta){
        alert('bem vindo!');
        location.href = "index.html";
        ED_logado = true;
        sessionStorage.setItem("logado", ED_logado);
    }
    else{
        alert('Usuario ou senha incorretos');
        ED_logado = false;
        sessionStorage.setItem("logado", ED_logado);
        location.href = "entrar.html";
    }
}