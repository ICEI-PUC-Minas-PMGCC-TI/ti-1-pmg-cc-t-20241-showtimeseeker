function deslogar(){
   var logado = false;
   location.href = "index.html";
   alert('deslogado com sucesso');
   sessionStorage.setItem("logado", logado);
}
function ir_para_alteracao(){
   location.href = "editar_perfil.html";
}