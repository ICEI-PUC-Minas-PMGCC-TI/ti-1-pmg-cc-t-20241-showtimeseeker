const GV_botaomostrarformcriarevento = document.getElementById('GV_botaomostrarformcriarevento');
const GV_cancelar = document.getElementById('GV_cancelar');
const botaocriarevento = document.getElementById('botaocriarevento');
const GV_areadoseventosparaedicao = document.getElementById('GV_visualizarmodificareventos');
var GV_verificacaodemodificacao = 0;
var GV_objetoeventoindex;

function GV_idindexevento(GV_id)
{
    let GV_dadosdoeventobuscarid = lerdadosevento().evento;
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

function GV_modificardeterminadoevento(dadosdonovoevento, GV_idxdoevento){
    let objdados = lerdadosevento();
    let GV_existe = true;
    let GV_i = 0;
    do
    {
            if(objdados.evento && objdados.evento != [] && GV_i != GV_idxdoevento)
            {
                    if(objdados.evento[GV_i].local == dadosdonovoevento.local && objdados.evento[GV_i].nome_do_evento == dadosdonovoevento.nome_do_evento && objdados.evento[GV_i].data == dadosdonovoevento.data)
                    {
                            GV_existe = false
                    }
            }
            GV_i = GV_i + 1;
    }
    while(GV_i < objdados.evento.length);
    if(GV_existe)
    {
            objdados.evento[GV_idxdoevento] = dadosdonovoevento;
            salvardadosevento(objdados);
            avisoavancar.innerHTML = '';
    } else {
            avisoavancar.innerHTML = '<span>*Esse evento já existe</span>';
    }
}
//Ler dados dos eventos
function lerdadosevento()
{
        let strdados = localStorage.getItem('bd_ShowTimeSeeker');
        let objdados = {}
        if(strdados){
//Caso existam ler e retornar os dados anteriores
                objdados = JSON.parse(strdados);
        } else
        {
//Dados iniciais caso nao existam dados anteriores
                objdados = {
                        evento:[
                                {
                                        nome_do_evento: "",
                                        local: "",
                                        preco: {
                                            valor: 0,
                                            moeda: "R$"
                                        },
                                        data: "",
                                        descricao: "",
                                        fotos: [],
                                        id: 0,
                                        linkcontato: "",
                                        estilodoevento: [],
                                        visualizacoes: 0,
                                        favoritos: 0,
                                        comentarios: [],
                                        donodoevento: "",
                                },
                                {
                                    nome_do_evento: "Pool party",
                                    local: "Avenida Jubeline",
                                    preco: {
                                        valor: 50,
                                        moeda: "R$"
                                    },
                                    data: "2024-08-06",
                                    descricao: "Em Maio temos mais um encontro marcado no Rancho Bill para comemorarmos o Bday do Felipe Arruda.\nUm super line, numa junção de muita vibe que o Rancho já tem, com a vibe que BH inteira já conhece das nossas festas. \nVai ser mais um DOMINGO de muita vibe, alegria e uma comemoração inesquecível.",
                                    fotos: ["https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F451776649%2F1408553967403%2F1%2Foriginal.20230222-065803?w=600&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C238%2C1080%2C540&s=d44826119d6bec5f86d3faf2729717d7", "https://hips.hearstapps.com/hmg-prod/images/701/pool-party1-1499900484.jpg"],
                                    id: 1718186424176,
                                    linkcontato: "https://www.instagram.com/",
                                    estilodoevento: ["2", "3"],
                                    visualizacoes: 0,
                                    favoritos: 0,
                                    comentarios: [],
                                    donodoevento: "",
                                },
                                {
                                    nome_do_evento: "Festa Junina",
                                    local: "Avenida Dom Pedro II",
                                    preco: {
                                        valor: 0,
                                        moeda: "R$"
                                    },
                                    data: "2024-08-19",
                                    descricao: "Venha se juntar a nós para celebrar a tradição e a alegria da Festa Junina do Rotary Club de Belo Horizonte - Barro Preto! No dia 8 de junho de 2024, a partir das 14h, o Colégio São Paulo, localizado na Rua Olímpio de Assis 190, Cidade Jardim, Belo Horizonte/MG, será o palco para essa festa cheia de diversão e cultura.",
                                    fotos: ["https://fashionistando.uai.com.br/wp-content/uploads/sites/11/2018/06/festa-junina-camarim.jpg", "https://soubh.uai.com.br/uploads/post/image/14267/festas_juninas_em_bh_ingressos_onde_ir.jpg"],
                                    id: 1718186421301,
                                    linkcontato: "https://www.instagram.com/",
                                    estilodoevento: ["1", "3"],
                                    visualizacoes: 0,
                                    favoritos: 0,
                                    comentarios: [],
                                    donodoevento: "",
                                },
                                {
                                    nome_do_evento: "KPOP BRASIL FEST",
                                    local: "Bairro Niteroi, Rio de Janeiro",
                                    preco: {
                                        valor: 800,
                                        moeda: "R$"
                                    },
                                    data: "2024-08-08",
                                    descricao: "Apresento a vocês nosso projeto K-pop Brasil Fest que vem com tudo no bairro de Niterói, em um novo local com um auditório belíssimo para confortar vocês que amam K-pop e cultura Coreana",
                                    fotos: ["https://f.i.uol.com.br/fotografia/2019/11/05/15729835355dc1d2efabe3b_1572983535_3x2_md.jpg", "https://f.i.uol.com.br/fotografia/2019/09/30/15698728845d925bf4d6793_1569872884_3x2_md.jpg"],
                                    id: 1718186419035,
                                    linkcontato: "https://www.instagram.com/",
                                    estilodoevento: ["1", "4"],
                                    visualizacoes: 0,
                                    favoritos: 0,
                                    comentarios: [],
                                    donodoevento: "",
                                },
                        ],
                        listadeusuarios:[],
                        usuario:[]
                };
        }
        return(objdados);
}

function GV_mostrareventosparaedicao(GV_arrayeventos){
        const GV_areadoseventosparaedicao = document.getElementById('GV_visualizarmodificareventos');
        let GV_stringeventosparaedicao = '';

        for(let GV_imeventoedit = 1; GV_imeventoedit < GV_arrayeventos.length; GV_imeventoedit = GV_imeventoedit + 1)
            {
                let GV_objevento = GV_arrayeventos[GV_imeventoedit];
                GV_stringeventosparaedicao = GV_stringeventosparaedicao + `
                        <div class="GV_exibicaodadosdoseventos" data-index = "${GV_objevento.id}">
                                <div class="GV_titulodecadaevento">
                                        <h3>${GV_objevento.nome_do_evento}</h3>
                                </div>
                                <div class="GV_grafico">
                                        <img src="https://cdn.kastatic.org/ka-perseus-graphie/a919eac3452bfb5a383d043f5e06ac66269b45b2.svg" alt="">
                                </div>
                                <div class="GV_verfavoritos">
                                        <span class="material-symbols-outlined">
                                                star
                                        </span>Número de pessoas que favoritaram
                                </div>
                                <div class="GV_vervisualizacoes">
                                        <span class="material-symbols-outlined">
                                                visibility
                                        </span>Número de pessoas que visualizaram
                                </div>
                                <div class="GV_botoesdealteracao">
                                        <button type="button" class="GV_botaoparamodificaroevento">Modificar</button>
                                        <button type="button" class="GV_botaoparaexcluiroevento">Excluir</button>
                                </div>
                        </div>`;
            }
            GV_areadoseventosparaedicao.innerHTML = GV_stringeventosparaedicao;
}

function GV_deletareventos(GV_indexdoevento){
        let GV_objetodadosSTS = lerdadosevento();
        GV_objetodadosSTS.evento.splice(GV_indexdoevento, 1);
        salvardadosevento(GV_objetodadosSTS);
        GV_mostrareventosparaedicao(lerdadosevento().evento)
}
            

//Salvar dados dos eventos atualizado
function salvardadosevento(dados){
        localStorage.setItem('bd_ShowTimeSeeker', JSON.stringify(dados));
}
const avisoavancar = document.querySelector('div#aviso');

function codigo(estilosdoseventovalores){

    const GV_html = document.querySelector('html');
    const GV_containerformulario = document.getElementById('GV_containerdoform');
    const GV_fundoescuro = document.getElementById('GV_fundoescuro');
    const formulario = document.getElementById('criarevento');
    const GV_formularioquerry = document.getElementById('#criarevento');
    const valoresdeprecos = document.getElementById('preco');

    const camponomedoevento = document.querySelector('input#nomedoevento');
    const labelnomedoevento = document.querySelector('label.nomedoevento');

    const campolocaldoevento = document.querySelector('input#localdoevento');
    const labellocaldoevento = document.querySelector('label.localdoevento');

    const campogastomedio = document.querySelector('input#preco');
    const labelgastomedio = document.querySelector('label.precomedio');

    const campodataevento = document.querySelector('input#data');
    const labeldataevento = document.querySelector('label.data');

    const campodescricaoevento = document.querySelector('textarea#descricao');
    const labeldescricaoevento = document.querySelector('label.descricao');

    const GV_campolinkcontato = document.querySelector('input.GV_linkcontato')
    const GV_labellinkcontato = document.querySelector('label.GV_linkcontato')

    const campoimagemevento = document.querySelector('input#fotos');
    const labelimagemevento = document.querySelector('label.fotos');
    const amostraimagemevento = document.querySelector('div.mostrarfotos');
    const adicionarimagemevento = document.querySelector('button#adicionarimagemevento');
    const excluirimagemevento = document.querySelector('button#excluirimagemevento');

    const avancar1 = document.getElementById('avancar1');
    const avancar2 = document.getElementById('avancar2');
    const GV_retroceder1 = document.getElementById('GV_retroceder1');
    const GV_retroceder2 =document.getElementById('GV_retroceder2');


    const primeiraparte = document.getElementById('primeiraparte');
    const segundaparte = document.getElementById('segundaparte');
    const terceiraparte = document.getElementById('terceiraparte');


    
    
    var listaimagensevento = [];
    var novaArr = [];
    
    
    
    var vnomedoevento = false, vlocaldoevento = false, vgastomedio = true, vestiloevento = false, vdescricaoevento = false, vimagensevento = false, vdataevento = false, GV_vlinkcontato = false;


    GV_mostrareventosparaedicao(lerdadosevento().evento)
    salvardadosevento(lerdadosevento());

    const GV_botaoexcluirevento = document.querySelector('.GV_botaoparaexcluiroevento');


    //Limpar os dados do formulario
        function limparformulario(){
            let GV_checkboxestilo = document.querySelectorAll('input.input-checkbox');
            camponomedoevento.value = '';
            campolocaldoevento.value = '';
            campodataevento.value = '';
            campogastomedio.value = '0.00';
            campodescricaoevento.value = '';
            GV_campolinkcontato.value = '';
            campoimagemevento.value = '';
            listaimagensevento = [];
            amostraimagemevento.innerHTML = '<span id="gv_espaco">&ensp;</span>'
        }

//Botao criar para mostrar o formulario

    GV_botaomostrarformcriarevento.addEventListener('click', () => {
        limparformulario();
        GV_containerformulario.style.display = 'block';
        GV_fundoescuro.style.display = 'block';
        GV_html.style.overflowY = 'hidden';
        segundaparte.style.display = 'none';
        terceiraparte.style.display = 'none';
        primeiraparte.style.display = 'block';
        GV_retroceder2.style.display = 'none';
        GV_retroceder1.style.display = 'none';
        avancar1.style.display = 'inline';
        avancar2.style.display = 'none';
        botaocriarevento.style.display = 'none';
        avisoavancar.innerHTML = '';
        GV_vlinkcontato = false;
        vnomedoevento = false;
        vlocaldoevento = false;
        vgastomedio = true;
        vestiloevento = false;
        vdescricaoevento = false;
        vimagensevento = false;
        vdataevento = false;
    })

//Formatar data
    function formatardata(date = new Date(), formatacao = 'yyyy-mm-dd')
    {
        formatacao = formatacao.replace('dd', date.getDate()).replace('mm', (date.getMonth() + 1).toString().padStart(2, '0')).replace('yyyy', date.getFullYear());
        return(formatacao);
    }

//Atribuir uma valor minimo ao campo data
    campodataevento.setAttribute('min', formatardata())

//Excluir determinado evento
        GV_areadoseventosparaedicao.addEventListener('click', (GV_informacao) => {
                let GV_indexdoevento;
                let GV_oquefoiclicado = GV_informacao.target;
                if(GV_oquefoiclicado.getAttribute('class') == 'GV_botaoparaexcluiroevento'){
                        GV_indexdoevento = GV_idindexevento(GV_oquefoiclicado.parentNode.parentNode.getAttribute('data-index'));
                        GV_deletareventos(GV_indexdoevento);
                } else if (GV_oquefoiclicado.getAttribute('class') == 'GV_botaoparamodificaroevento'){
                        GV_indexdoevento = GV_idindexevento(GV_oquefoiclicado.parentNode.parentNode.getAttribute('data-index'));
                        limparformulario();
                        GV_containerformulario.style.display = 'block';
                        GV_fundoescuro.style.display = 'block';
                        GV_html.style.overflowY = 'hidden';
                        segundaparte.style.display = 'none';
                        terceiraparte.style.display = 'none';
                        primeiraparte.style.display = 'block';
                        GV_retroceder2.style.display = 'none';
                        GV_retroceder1.style.display = 'none';
                        avancar1.style.display = 'inline';
                        avancar2.style.display = 'none';
                        botaocriarevento.style.display = 'none';
                        GV_verificacaodemodificacao = GV_indexdoevento;
                        GV_objetoeventoindex = lerdadosevento().evento[GV_indexdoevento];
                        camponomedoevento.value = GV_objetoeventoindex.nome_do_evento;
                        campolocaldoevento.value = GV_objetoeventoindex.local;
                        campogastomedio.value = GV_objetoeventoindex.preco.valor
                        campodataevento.value = GV_objetoeventoindex.data
                        campodescricaoevento.value = GV_objetoeventoindex.descricao
                        GV_campolinkcontato.value = GV_objetoeventoindex.linkcontato
                        listaimagensevento = GV_objetoeventoindex.fotos
                        for(let GV_imagem of listaimagensevento){
                            if(document.getElementById('gv_espaco')){
                                document.getElementById('gv_espaco').remove();
                            }
                            amostraimagemevento.innerHTML = amostraimagemevento.innerHTML + `<img src="${GV_imagem}" alt="" class="imagensdoseventos">` 
                        }
                        GV_vlinkcontato = true;
                        vnomedoevento = true;
                        vlocaldoevento = true;
                        vgastomedio = true;
                        vestiloevento = true;
                        vdescricaoevento = true;
                        vimagensevento = true;
                        vdataevento = true;
                        botaocriarevento.innerText = 'Modificar';
                }
        })

//Adicionar imagem ao evento
    adicionarimagemevento.addEventListener('click', () => {
        listaimagensevento.push(campoimagemevento.value);
        let urlPattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
        if(urlPattern.test(campoimagemevento.value))
        {
            if(document.getElementById('gv_espaco')){
                document.getElementById('gv_espaco').remove();
                }
                amostraimagemevento.innerHTML = amostraimagemevento.innerHTML + `<img src="${campoimagemevento.value}" alt="" class="imagensdoseventos">` 
                campoimagemevento.value = '';
                labelimagemevento.innerHTML = '';
        }
        else
        {
            GV_vlinkcontato = false;
            labelimagemevento.innerHTML = '*Insira um link válido';
        }
    })

//Excluir a ultima imagem adicionada ao evento
    excluirimagemevento.addEventListener('click', () => {
        listaimagensevento.pop();
        amostraimagemevento.removeChild(amostraimagemevento.lastChild);
        console.log(listaimagensevento);
    })

//Validacao do nome do evento
    camponomedoevento.addEventListener('blur', () => {
        if(camponomedoevento.value.length < 5){
                labelnomedoevento.innerHTML = '*Insira no mínimo 5 caracteres';
                vnomedoevento = false;
        } else{
                labelnomedoevento.innerHTML = '';
                vnomedoevento = true;
        }
    });
    camponomedoevento.addEventListener('change', () => {
        if(camponomedoevento.value.length < 5){
                labelnomedoevento.innerHTML = '*Insira no mínimo 5 caracteres';
                vnomedoevento = false;
        } else{
                labelnomedoevento.innerHTML = '';
                vnomedoevento = true;
        }
    });

//Validacao do local do evento
    campolocaldoevento.addEventListener('blur', () => {
        if(campolocaldoevento.value.length < 15){
                labellocaldoevento.innerHTML = '*Insira no mínimo 15 caracteres';
                vlocaldoevento = false;
        } else{
                labellocaldoevento.innerHTML = '';
                vlocaldoevento = true;
        }
    });
    campolocaldoevento.addEventListener('change', () => {
        if(campolocaldoevento.value.length < 15){
                labellocaldoevento.innerHTML = '*Insira no mínimo 15 caracteres';
                vlocaldoevento = false;
        } else{
                labellocaldoevento.innerHTML = '';
                vlocaldoevento = true;
        }
    });

//Validacao do gasto medio do evento
    campogastomedio.addEventListener('blur', () => {
        if(campogastomedio.value == ''){
                labelgastomedio.innerHTML = '*Insira um valor';
                vgastomedio = false;
        } else{
                vgastomedio = true;
        }
    });
    campogastomedio.addEventListener('change', () => {
        if(campogastomedio.value == ''){
                labelgastomedio.innerHTML = '*Insira um valor';
                vgastomedio = false;
        } else{
                vgastomedio = true;
        }
    });

//Validacao da data do evento
    campodataevento.addEventListener('blur', () => {
        if(campodataevento.value == ''){
                vdataevento = false;
        } else {
                vdataevento = true;
        }
    })
    campodataevento.addEventListener('change', () => {
        if(campodataevento.value == ''){
                vdataevento = false;
        } else {
                vdataevento = true;
        }
    })

//Validacao da descricao do evento
        campodescricaoevento.addEventListener('blur', () => {
        if(campodescricaoevento.value.length < 100){
                labeldescricaoevento.innerHTML = '*Insira no mínimo 100 caracteres';
                vdescricaoevento = false;
        } else if(campodescricaoevento.value.length > 350){
                labeldescricaoevento.innerHTML = '*Insira no máximo 350 caracteres';
                vdescricaoevento = false;
        } else{
                labeldescricaoevento.innerHTML = '';
                vdescricaoevento = true;
        }
    });
    campodescricaoevento.addEventListener('change', () => {
        if(campodescricaoevento.value.length < 100){
                labeldescricaoevento.innerHTML = '*Insira no mínimo 100 caracteres';
                vdescricaoevento = false;
        } else if(campodescricaoevento.value.length > 350){
                labeldescricaoevento.innerHTML = '*Insira no máximo 350 caracteres';
                vdescricaoevento = false;
        } else{
                labeldescricaoevento.innerHTML = '';
                vdescricaoevento = true;
        }
    });

//Validacao do link de contato
    GV_campolinkcontato.addEventListener('blur', () =>{
        let urlPattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
        if(urlPattern.test(GV_campolinkcontato.value))
        {
            GV_vlinkcontato = true;
            GV_labellinkcontato.innerHTML = '';
        }
        else
        {
            GV_vlinkcontato = false;
            GV_labellinkcontato.innerHTML = '*Insira um link válido';
        }
    })
    GV_campolinkcontato.addEventListener('change', () =>{
        let urlPattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
        if(urlPattern.test(GV_campolinkcontato.value))
        {
            GV_vlinkcontato = true;
            GV_labellinkcontato.innerHTML = '';
        }
        else
        {
            GV_vlinkcontato = false;
            GV_labellinkcontato.innerHTML = '*Insira um link válido';
        }
    })

//Limpar dados e retornar ao precionar cancelar
    GV_cancelar.addEventListener('click', GV_cancelar => {
        limparformulario();
        GV_containerformulario.style.display = 'none';
        GV_fundoescuro.style.display = 'none';
        GV_html.style.overflowY = 'auto'
        avisoavancar.innerHTML = '';
    });

//Validar os dados e ir para pagina 2
    avancar1.addEventListener('click', proximapagina => {
        novaArr = estilosdoseventovalores.filter((estilo, i) => estilosdoseventovalores.indexOf(estilo) === i);
        
        if(novaArr.length == 0){
                vestiloevento = false;
        } else {
                vestiloevento = true;
        }
        if(vnomedoevento && vlocaldoevento && vestiloevento && vgastomedio && vdataevento){
                avisoavancar.innerHTML = '';
                primeiraparte.style.display = 'none';
                segundaparte.style.display = 'inherit';
                avancar1.style.display = 'none';
                avancar2.style.display = 'inline';
                GV_retroceder1.style.display = 'inline';
        } else {
                avisoavancar.innerHTML = '<span>*Preencha todos os campos</span>';
                avancar1.style.display = 'inline';
                GV_retroceder1.style.display = 'none';
        }
    });

//Retroceder da pagina 2 para a pagina 1
    GV_retroceder1.addEventListener('click', GV_parginaanterior =>{
        avisoavancar.innerHTML = '';
        primeiraparte.style.display = 'inherit';
        segundaparte.style.display = 'none';
        avancar1.style.display = 'inline';
        avancar2.style.display = 'none';
        GV_retroceder1.style.display = 'none';
    });

//Validar os dados e ir para pagina 3
    avancar2.addEventListener('click', proximapagina2 => {
        if(vdescricaoevento && GV_vlinkcontato){
                avisoavancar.innerHTML = '';
                segundaparte.style.display = 'none';
                terceiraparte.style.display = 'inherit';
                avancar2.style.display = 'none';
                botaocriarevento.style.display = 'inline';
                GV_retroceder2.style.display = 'inline';
                GV_retroceder1.style.display = 'none';
        } else {
                avisoavancar.innerHTML = '<span>*Preencha todos os campos</span>';
                avancar2.style.display = 'inline';
                GV_retroceder2.style.display = 'none';
        }
    })
//Retroceder da pagina 3 para a pagina 2
    GV_retroceder2.addEventListener('click', GV_parginaanterior2 =>
        {
                avisoavancar.innerHTML = '';
                segundaparte.style.display = 'inherit';
                terceiraparte.style.display = 'none';
                avancar2.style.display = 'inline';
                botaocriarevento.style.display = 'none';
                GV_retroceder2.style.display = 'none';
                GV_retroceder1.style.display = 'inline';
        });


//Criar um novo evento
    formulario.addEventListener('submit', criar1 => {
//Lista dos estilos dos eventos sem repetiçoes
        novaArr = estilosdoseventovalores.filter((estilo, i) => estilosdoseventovalores.indexOf(estilo) === i);

//Validacao dos estilos do evento
        if(novaArr.length == 0){
                vestiloevento = false;
        } else {
                vestiloevento = true;
        }

//Validacao das imagens do evento
        if(listaimagensevento.length == 0){
                vimagensevento = false;
        } else {
                vimagensevento = true;
        }

//Evitar que seja feito o padrao
        criar1.preventDefault();

//Validacao geral na hora de criar um evento
        if(vnomedoevento && vlocaldoevento && vestiloevento && vgastomedio && vdescricaoevento && GV_vlinkcontato && vimagensevento && vdataevento){

            avisoavancar.innerHTML = '';
//Pegar o objeto JavaScript gerado pelo formulario
        const formdata = new FormData(formulario);
        var dadosdosformularios = Object.fromEntries(formdata);

//Substituir os estilos nos dados dos formularios
        dadosdosformularios.estilodoevento = novaArr;

//Criar uma elemento moedas com valor e moeda
        dadosdosformularios.preco = {
            valor: parseFloat(dadosdosformularios.preco),
            moeda: dadosdosformularios.moeda,
        }
        delete dadosdosformularios.moeda;

        dadosdosformularios.fotos = listaimagensevento;

        if(GV_verificacaodemodificacao != 0){
            dadosdosformularios.visualizacoes = GV_objetoeventoindex.visualizacoes;
            dadosdosformularios.favoritos = GV_objetoeventoindex.favoritos;
            dadosdosformularios.comentarios = GV_objetoeventoindex.comentarios;
            dadosdosformularios.donodoevento = GV_objetoeventoindex.donodoevento;
            dadosdosformularios.id = GV_objetoeventoindex.id;
            GV_modificardeterminadoevento(dadosdosformularios, GV_verificacaodemodificacao);
        }else{
            dadosdosformularios.id = Date.now();
            dadosdosformularios.visualizacoes = 0;
            dadosdosformularios.favoritos = 0;
            dadosdosformularios.comentarios = [];
            dadosdosformularios.donodoevento = '';
//Mostrar na tela
        adicionarevento(dadosdosformularios);
        }
        GV_containerformulario.style.display = 'none';
        GV_fundoescuro.style.display = 'none';
        GV_html.style.overflowY = 'auto';
        botaocriarevento.innerText = 'Criar';
        GV_mostrareventosparaedicao(lerdadosevento().evento); 
        } else{
                botaocriarevento.style.display = 'inline';
                avisoavancar.innerHTML = '<span>*Preencha todos os campos</span>';
        }
    });    

    preco.addEventListener('change', function(){
        if(preco.value == ''){
                preco.value = 0;
        }
        preco.value = parseFloat(preco.value).toFixed(2);
    })

    
}

function adicionarevento(dadosdonovoevento){
        let objdados = lerdadosevento();
        let GV_existe = true;
        let GV_i = 0;
        //console.log(objdados.evento[0]);
        do
        {
                if(objdados.evento && objdados.evento != [])
                {
                        if(objdados.evento[GV_i].local == dadosdonovoevento.local && objdados.evento[GV_i].nome_do_evento == dadosdonovoevento.nome_do_evento && objdados.evento[GV_i].data == dadosdonovoevento.data)
                        {
                                GV_existe = false
                        }
                }
                GV_i = GV_i + 1;
        }
        while(GV_i < objdados.evento.length);
        if(GV_existe)
        {
                objdados.evento.push(dadosdonovoevento);
                salvardadosevento(objdados);
                avisoavancar.innerHTML = '';
        } else {
                avisoavancar.innerHTML = '<span>*Esse evento já existe</span>';
        }
                
}





























// Author: Habib Mhamadi
// Email: habibmhamadi@gmail.com


function MultiSelectTag(el, customs = { shadow: false, rounded: true }) {
        // Initialize variables
        var element = null,
            options = null,
            customSelectContainer = null,
            wrapper = null,
            btnContainer = null,
            body = null,
            inputContainer = null,
            inputBody = null,
            input = null,
            button = null,
            drawer = null,
            ul = null;
    
        // Customize tag colors
        var tagColor = customs.tagColor || {};
        tagColor.textColor = "#0372B2";
        tagColor.borderColor = "#0372B2";
        tagColor.bgColor = "#C0E6FC";
    
        // Initialize DOM Parser
        var domParser = new DOMParser();
    
        // Initialize
        init();
    
        function init() {
            // DOM element initialization
            element = document.getElementById(el);
            createElements();
            initOptions();
            enableItemSelection();
            setValues(false);
    
            // Event listeners
            button.addEventListener('click', () => {
                if (drawer.classList.contains('hidden')) {
                    initOptions();
                    enableItemSelection();
                    drawer.classList.remove('hidden');
                    input.focus();
                } else {
                    drawer.classList.add('hidden');
                }
            });
    
            input.addEventListener('keyup', (e) => {
                initOptions(e.target.value);
                enableItemSelection();
            });
    
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && !e.target.value && inputContainer.childElementCount > 1) {
                    const child = body.children[inputContainer.childElementCount - 2].firstChild;
                    const option = options.find((op) => op.value == child.dataset.value);
                    option.selected = false;
                    removeTag(child.dataset.value);
                    setValues();
                }
            });
    
            window.addEventListener('click', (e) => {
                if (!customSelectContainer.contains(e.target)) {
                    if ((e.target.nodeName !== "LI") && (e.target.getAttribute("class") !== "input_checkbox")) {
                        // hide the list option only if we click outside of it
                        drawer.classList.add('hidden');
                    } else {
                        // enable again the click on the list options
                        enableItemSelection();
                    }
                }
            });
        }
    
        function createElements() {
            // Create custom elements
            options = getOptions();
            element.classList.add('hidden');
    
            // .multi-select-tag
            customSelectContainer = document.createElement('div');
            customSelectContainer.classList.add('mult-select-tag');
    
            // .container
            wrapper = document.createElement('div');
            wrapper.classList.add('wrapper');
    
            // body
            body = document.createElement('div');
            body.classList.add('body');
            if (customs.shadow) {
                body.classList.add('shadow');
            }
            if (customs.rounded) {
                body.classList.add('rounded');
            }
    
            // .input-container
            inputContainer = document.createElement('div');
            inputContainer.classList.add('input-container');
    
            // input
            input = document.createElement('input');
            input.classList.add('input');
            input.placeholder = `${customs.placeholder || 'Search...'}`;
    
            inputBody = document.createElement('inputBody');
            inputBody.classList.add('input-body');
            inputBody.append(input);
    
            body.append(inputContainer);
    
            // .btn-container
            btnContainer = document.createElement('div');
            btnContainer.classList.add('btn-container');
    
            // button
            button = document.createElement('button');
            button.type = 'button';
            btnContainer.append(button);
    
            const icon = domParser.parseFromString(
                `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="18 15 12 21 6 15"></polyline>
                </svg>`, 'image/svg+xml').documentElement;
    
            button.append(icon);
    
            body.append(btnContainer);
            wrapper.append(body);
    
            drawer = document.createElement('div');
            drawer.classList.add(...['drawer', 'hidden']);
            if (customs.shadow) {
                drawer.classList.add('shadow');
            }
            if (customs.rounded) {
                drawer.classList.add('rounded');
            }
            drawer.append(inputBody);
            ul = document.createElement('ul');
    
            drawer.appendChild(ul);
    
            customSelectContainer.appendChild(wrapper);
            customSelectContainer.appendChild(drawer);
    
            // Place TailwindTagSelection after the element
            if (element.nextSibling) {
                element.parentNode.insertBefore(customSelectContainer, element.nextSibling);
            } else {
                element.parentNode.appendChild(customSelectContainer);
            }
        }
    
        function createElementInSelectList(option, val, selected = false) {
            // Create a <li> elmt in the drop-down list,
            // selected parameters tells if the checkbox need to be selected and the bg color changed
            const li = document.createElement('li');
            li.innerHTML = "<input type='checkbox' style='margin:0 0.5em 0 0' class='input_checkbox'>"; // add the checkbox at the left of the <li>
            li.innerHTML += option.label;
            li.dataset.value = option.value;
            const checkbox = li.firstChild;
            checkbox.dataset.value = option.value;
    
            // For search
            if (val && option.label.toLowerCase().startsWith(val.toLowerCase())) {
                ul.appendChild(li);
            } else if (!val) {
                ul.appendChild(li);
            }
    
            // Change bg color and checking the checkbox
            if (selected) {
                li.style.backgroundColor = tagColor.bgColor;
                checkbox.checked = true;
            }
        }
    
        function initOptions(val = null) {
            ul.innerHTML = '';
            for (var option of options) {
                // if option already selected
                if (option.selected) {
                    !isTagSelected(option.value) && createTag(option);
    
                    // We create a option in the list, but with different color
                    createElementInSelectList(option, val, true);
                } else {
                    createElementInSelectList(option, val);
                }
            }
        }
    
        function createTag(option) {
            // Create and show selected item as tag
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item-container');
            itemDiv.style.color = tagColor.textColor || '#2c7a7b';
            itemDiv.style.borderColor = tagColor.borderColor || '#81e6d9';
            itemDiv.style.background = tagColor.bgColor || '#e6fffa';
            const itemLabel = document.createElement('div');
            itemLabel.classList.add('item-label');
            itemLabel.style.color = tagColor.textColor || '#2c7a7b';
            itemLabel.innerHTML = option.label;
            itemLabel.dataset.value = option.value;
            const itemClose = domParser.parseFromString(
                `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-close-svg">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>`, 'image/svg+xml').documentElement;
    
            itemClose.addEventListener('click', (e) => {
                const unselectOption = options.find((op) => op.value == option.value);
                unselectOption.selected = false;
                removeTag(option.value);
                initOptions();
                setValues();
            });
    
            itemDiv.appendChild(itemLabel);
            itemDiv.appendChild(itemClose);
            inputContainer.append(itemDiv);
        }
    
        function enableItemSelection() {
            // Add click listener to the list items
            for (var li of ul.children) {
                li.addEventListener('click', (e) => {
                    if (options.find((o) => o.value == e.target.dataset.value).selected === false) {
                        // if the option is not selected, we select it
                        options.find((o) => o.value == e.target.dataset.value).selected = true;
                        input.value = null;
                        initOptions();
                        setValues();
                        //input.focus() // brings up the list to the input
                    } else {
                        // if it's already selected, we deselect it
                        options.find((o) => o.value == e.target.dataset.value).selected = false;
                        input.value = null;
                        initOptions();
                        setValues();
                        //input.focus() // brings up the list on the input
                        removeTag(e.target.dataset.value);
                    }
                });
            }
        }
    
        function isTagSelected(val) {
            // If the item is already selected
            for (var child of inputContainer.children) {
                if (!child.classList.contains('input-body') && child.firstChild.dataset.value == val) {
                    return true;
                }
            }
            return false;
        }
    
        function removeTag(val) {
            // Remove selected item
            for (var child of inputContainer.children) {
                if (!child.classList.contains('input-body') && child.firstChild.dataset.value == val) {
                    inputContainer.removeChild(child);
                }
            }
        }
    
        function setValues(fireEvent = true) {
            // Update element final values
            selected_values = [];
            for (var i = 0; i < options.length; i++) {
                element.options[i].selected = options[i].selected;
                if (options[i].selected) {
                    selected_values.push({ label: options[i].label, value: options[i].value });
                }
            }
            if (fireEvent && customs.hasOwnProperty('onChange')) {
                customs.onChange(selected_values);
            }
        }
    
        function getOptions() {
            // Map element options
            return [...element.options].map((op) => {
                return {
                    value: op.value,
                    label: op.label,
                    selected: op.selected,
                };
            });
        }
    








const GV_teste = document.getElementById('GV_limparchecbox');


//GV_teste.addEventListener('click', (tregfa) => 
    function GV_limparestiloevento(){
        let GV_checkboxestiloteste = document.querySelector('input.input_checkbox');
        GV_checkboxestiloteste.checked = false;
        //let GV_ul = document.querySelector('div.drawer.rounded ul');
        //GV_ul.style.background = 'black'


        ul = document.querySelector('div.drawer.rounded ul');
        for (var li of ul.children) {
                //console.log(li.dataset.value);    
                    if (options.find((o) => o.value == li.dataset.value).selected === true) {
                        options.find((o) => o.value == li.dataset.value).selected = false;
                        input.value = null;
                        initOptions();
                        setValues();
                        removeTag(li.dataset.value);
                    }
        }
    }

    function GV_modificarosgostos(GV_listadegosto){
        for (let GV_gosto of GV_listadegosto) {
                //console.log(li.dataset.value);    
                    if (options.find((o) => o.value == GV_gosto).selected === false) {
                        options.find((o) => o.value == GV_gosto).selected = true;
                        input.value = null;
                        initOptions();
                        setValues();
                    }
        }
    }
    

    //botaocriarevento.addEventListener('click', () =>{GV_limparestiloevento()})

    GV_cancelar.addEventListener('click', () =>{GV_limparestiloevento()})

    GV_botaomostrarformcriarevento.addEventListener('click', () =>{GV_limparestiloevento()})

    GV_areadoseventosparaedicao.addEventListener('click', (GV_informacao) => {
        let GV_indexdoevento;
        let GV_oquefoiclicado = GV_informacao.target;
        if (GV_oquefoiclicado.getAttribute('class') == 'GV_botaoparamodificaroevento'){
            GV_indexdoevento = GV_idindexevento(GV_oquefoiclicado.parentNode.parentNode.getAttribute('data-index'));
            GV_modificarosgostos(lerdadosevento().evento[GV_indexdoevento].estilodoevento);
        }
    })
}