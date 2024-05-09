
        
function codigo(estilosdoseventovalores){
    const formulario = document.getElementById('criarevento');
    const estilo = document.getElementById('estilodoevento');
    
    formulario.addEventListener('submit', criar1 => {

        var novaArr = estilosdoseventovalores.filter((estilo, i) => estilosdoseventovalores.indexOf(estilo) === i);

        criar1.preventDefault();

        const formdata = new FormData(formulario);
        var dadosdosformularios = Object.fromEntries(formdata);
        dadosdosformularios.estilodoevento = novaArr;
        console.log(novaArr);
        console.log(dadosdosformularios);

/*
        console.log(dadosdosformularios);
        console.log(estilosdoseventovalores);
        console.log(estilo);
        fetch('dados.json', {
            method: 'POST',
            headers:{
                'Contet-Type': 'application/json'
            },
            body: JSON.stringify(dadosdosformularios)
        }).then(res => res.json()).then(dadosdosformularios => console.log(dadosdosformularios))*/
    });    

}
