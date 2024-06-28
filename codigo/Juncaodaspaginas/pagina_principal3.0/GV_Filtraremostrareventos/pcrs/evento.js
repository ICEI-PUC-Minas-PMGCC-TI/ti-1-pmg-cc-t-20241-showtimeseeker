function paginadoevento(eventos, indexdoevento){

    // Recuperar os dados do evento

    // Elementos do DOM que serão preenchidos dinamicamente
    let nomeEventoElem = document.getElementById('nomeEvento');
    let localEventoElem = document.getElementById('localEvento');
    let descricaoEventoElem = document.getElementById('descricaoEvento');
    let favoritadosElem = document.getElementById('favoritados');
    let visualizacoesTotaisElem = document.getElementById('visualizacoesTotais');
    let carouselInner = document.getElementById('carouselInner');

    // Preencher o carrossel com as fotos do primeiro evento (eventos[0])
    eventos[indexdoevento].fotos.forEach((foto, index) => {
        let carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (index === 0) {
            carouselItem.classList.add('active');
        }

        let img = document.createElement('img');
        img.src = foto;
        img.classList.add('d-block', 'w-100');
        img.alt = `Imagem ${index + 1}`;

        carouselItem.appendChild(img);
        carouselInner.appendChild(carouselItem);
    });

    // Preencher as informações do primeiro evento
    nomeEventoElem.textContent = eventos[indexdoevento].nome_do_evento;
    localEventoElem.textContent = eventos[indexdoevento].local;
    descricaoEventoElem.textContent = eventos[indexdoevento].descricao;
    favoritadosElem.textContent = eventos[indexdoevento].favoritos;
    visualizacoesTotaisElem.textContent = eventos[indexdoevento].visualizacoes.total;



    let botaoComentar = document.getElementById('botaoComentar');
    botaoComentar.addEventListener('click', function() {
        let comentario = document.getElementById('areaComentarios').value.trim();
        if (comentario !== '') {
            eventos[1].comentarios.push(comentario);
            // Limpar o campo de comentário
            document.getElementById('areaComentarios').value = '';
            // Salvar de volta no localStorage se necessário
            localStorage.setItem('bd_ShowTimeSeeker', JSON.stringify({ evento: eventos }));
            // Atualizar a exibição dos comentários (implementação opcional)
        }
    });
}

function GV_idindexevento(GV_id)
{
    let GV_dadosdoeventobuscarid = JSON.parse(localStorage.getItem('bd_ShowTimeSeeker')).evento;
    let GV_indexpararetornar = -1;
    let GV_contador = 1;
    do
    {
        if(GV_dadosdoeventobuscarid[GV_contador].id == GV_id)
        {
            GV_indexpararetornar = GV_contador;
        }
        GV_contador = GV_contador + 1;
    }
    while(GV_contador < GV_dadosdoeventobuscarid.length && GV_indexpararetornar == -1);
    return(GV_indexpararetornar);
}

window.onload = function(){
    const urlparams = new URLSearchParams(window.location.search);
    const GV_idurl = parseInt(urlparams.get('id'));
    

    paginadoevento(JSON.parse(localStorage.getItem('bd_ShowTimeSeeker')).evento, GV_idindexevento(GV_idurl))


}