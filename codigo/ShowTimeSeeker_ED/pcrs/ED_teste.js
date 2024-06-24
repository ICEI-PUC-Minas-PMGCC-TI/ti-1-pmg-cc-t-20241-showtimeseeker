function ir_para_perfil(){
    var ED_log = sessionStorage.getItem('logado');
    if(ED_log == "true"){
        location.href = "Perfil.html";
    }
    else{
        location.href = "index.html";
    }
}