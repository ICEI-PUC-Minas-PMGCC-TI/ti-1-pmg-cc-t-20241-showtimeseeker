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

function GV_salvardadosdousuarioatual(GV_usuarioatual){
    let GV_objdadosusuario = lerdadosevento();
    GV_objdadosusuario.usuario = GV_usuarioatual;
    GV_objdadosusuario.listadeusuarios.push(GV_usuarioatual);
    salvardadosevento(GV_objdadosusuario);
}

function GV_modificardadosdousuarioatual(GV_usuarioatual){
    let GV_contadorusuario = -1;
    let GV_acheiousuario = false; 
    let GV_objdadosusuario = lerdadosevento();
    do
    {
        GV_contadorusuario = GV_contadorusuario + 1;
        GV_acheiousuario = GV_objdadosusuario.listadeusuarios[GV_contadorusuario].ID == GV_usuarioatual.ID;
    }
    while(GV_contadorusuario < GV_objdadosusuario.listadeusuarios.length -1 && !GV_acheiousuario);
    GV_objdadosusuario.usuario = GV_usuarioatual;
    GV_objdadosusuario.listadeusuarios[GV_contadorusuario] = GV_usuarioatual;
    salvardadosevento(GV_objdadosusuario);
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
                                        visualizacoes: {
                                            total: 0,
                                            gosto1: 0,
                                            gosto2: 0,
                                            gosto3: 0,
                                            gosto4: 0,
                                            gosto5: 0,
                                            gosto6: 0,
                                            gosto7: 0,
                                            gosto8: 0,
                                            gosto9: 0,
                                            gosto10: 0,
                                            gosto11: 0,
                                            gosto12: 0,
                                        },
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
                                    data: "2024-07-01",
                                    descricao: "Em Maio temos mais um encontro marcado no Rancho Bill para comemorarmos o Bday do Felipe Arruda.\nUm super line, numa junção de muita vibe que o Rancho já tem, com a vibe que BH inteira já conhece das nossas festas. \nVai ser mais um DOMINGO de muita vibe, alegria e uma comemoração inesquecível.",
                                    fotos: ["https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F451776649%2F1408553967403%2F1%2Foriginal.20230222-065803?w=600&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C238%2C1080%2C540&s=d44826119d6bec5f86d3faf2729717d7", "https://hips.hearstapps.com/hmg-prod/images/701/pool-party1-1499900484.jpg"],
                                    id: 1718186424176,
                                    linkcontato: "https://www.instagram.com/",
                                    estilodoevento: ["2", "3"],
                                    visualizacoes: {
                                        total: 3,
                                        gosto1: 1,
                                        gosto2: 2,
                                        gosto3: 3,
                                        gosto4: 0,
                                        gosto5: 0,
                                        gosto6: 0,
                                        gosto7: 0,
                                        gosto8: 0,
                                        gosto9: 0,
                                        gosto10: 0,
                                        gosto11: 0,
                                        gosto12: 0,
                                    },
                                    favoritos: 0,
                                    comentarios: [],
                                    donodoevento: 1719666789117,
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
                                    visualizacoes: {
                                        total: 0,
                                        gosto1: 0,
                                        gosto2: 0,
                                        gosto3: 0,
                                        gosto4: 0,
                                        gosto5: 0,
                                        gosto6: 0,
                                        gosto7: 0,
                                        gosto8: 0,
                                        gosto9: 0,
                                        gosto10: 0,
                                        gosto11: 0,
                                        gosto12: 0,
                                    },
                                    favoritos: 0,
                                    comentarios: [],
                                    donodoevento: 1719666789117,
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
                                    visualizacoes: {
                                        total: 0,
                                        gosto1: 0,
                                        gosto2: 0,
                                        gosto3: 0,
                                        gosto4: 0,
                                        gosto5: 0,
                                        gosto6: 0,
                                        gosto7: 0,
                                        gosto8: 0,
                                        gosto9: 0,
                                        gosto10: 0,
                                        gosto11: 0,
                                        gosto12: 0,
                                    },
                                    favoritos: 0,
                                    comentarios: [],
                                    donodoevento: 1719666789117,
                                },
                        ],
                        listadeusuarios:[
                            {
                                username: "Eduardo",
                                senha: "12345",
                                email: "fffffff@gmail.com",
                                ID: 1719666789117,
                                precoMedio: "564",
                                gostos: ["1", "2", "3"],
                                moeda: "R$",
                                favoritos: [],
                                visualizou: [],
                                foto_perfil: "https://fernandapessoa.com.br/wp-content/uploads/2021/11/jovem-na-escada-curso-fernanda-pessoa-um-novo-tempo-1536x1024.jpg"
                            }
                        ],
                        usuario:{}
                };
        }
        return(objdados);
}

function GV_converterdata(data){
    let convertida = data.split("-");
    convertida = convertida.reverse();
    convertida = convertida.join("/")
    return convertida
}

function GV_mostrareventosfavoritos(){
    const GV_areadosfavoritos = document.querySelector('div.GV_abameusfavoritos');
    let GV_objtotaisfav = lerdadosevento();
    let GV_strfav = '';
    let GV_listatotaisfav = GV_objtotaisfav.evento;
    for(let GV_favevento of GV_objtotaisfav.usuario.favoritos){
        let GV_indexfavevento = GV_idindexevento(GV_favevento);
        if(GV_indexfavevento > 0){
        GV_strfav = GV_strfav + `
        <div class="GV_exibicaodadosdoseventos">
                <div class="GV_titulodecadaevento">
                    <h3>${GV_listatotaisfav[GV_indexfavevento].nome_do_evento}</h3>
                </div>
                <div class="GV_imgfav">
                    <img src="${GV_listatotaisfav[GV_indexfavevento].fotos[0]}" alt="">
                </div>
                <div class="GV_dadosfavvisu">
                    <div class="GV_favdescriacao">
                        ${GV_listatotaisfav[GV_indexfavevento].descricao.replaceAll('\n', '<br>')}
                    </div>
                    <div class="GV_vervisualizacoes">
                        <span class="GV_destaquedatalocal">Data:</span> ${GV_converterdata(GV_listatotaisfav[GV_indexfavevento].data)}<br>
                        <span class="GV_destaquedatalocal">Local:</span> ${GV_listatotaisfav[GV_indexfavevento].local}
                    </div>
                </div>
                <div class="GV_botoesdealteracao">
                    <button class="GV_vermaisbtn" data-id="${GV_listatotaisfav[GV_indexfavevento].id}">Ver mais</button>
                    <button class="GV_excluirbtn" data-id="${GV_listatotaisfav[GV_indexfavevento].id}">Excluir</button>
                </div>
        </div>`;
        }
    }
    GV_areadosfavoritos.innerHTML = GV_strfav;
}

function GV_mostrareventosparaedicao(GV_arrayeventos){
        const GV_areadoseventosparaedicao = document.getElementById('GV_visualizarmodificareventos');
        let GV_stringeventosparaedicao = '';
        for(let GV_imeventoedit = 1; GV_imeventoedit < GV_arrayeventos.length; GV_imeventoedit = GV_imeventoedit + 1)
            {
                let GV_objevento = GV_arrayeventos[GV_imeventoedit];
                if(GV_objevento.donodoevento == lerdadosevento().usuario.ID)
                {
                    GV_stringeventosparaedicao = GV_stringeventosparaedicao + `
                    <div class="GV_exibicaodadosdoseventos" data-index = "${GV_objevento.id}">
                    <div class="GV_titulodecadaevento">
                    <h3>${GV_objevento.nome_do_evento}</h3>
                    </div>
                    <div class="GV_grafico">
                    <div class="chart">
                    <abbr title=""><div class="bar" id="gosto-1" ></div></abbr>
                    <abbr title=""><div class="bar" id="gosto-2" ></div></abbr>
                    <abbr title=""><div class="bar" id="gosto-3" ></div></abbr>
                    <abbr title=""><div class="bar" id="gosto-4" ></div></abbr>
                    </div>
                    </div>
                    <div class="GV_dadosfavvisu">
                    <div class="GV_verfavoritos">
                    Quantidade de favoritos: 
                    <span class="material-symbols-outlined">
                    star
                    </span>${GV_objevento.favoritos}
                    </div>
                    <div class="GV_vervisualizacoes">
                    Quantidade de visualizacoes:
                    <span class="material-symbols-outlined">
                    visibility
                    </span>${GV_objevento.visualizacoes.total}
                    </div>
                    </div>
                    <div class="GV_botoesdealteracao">
                    <button type="button" class="GV_botaoparamodificaroevento">Modificar</button>
                    <button type="button" class="GV_botaoparaexcluiroevento">Excluir</button>
                    </div>
                    </div>`;
                }
            }
            GV_areadoseventosparaedicao.innerHTML = GV_stringeventosparaedicao;
            const GV_todasareasdeedicao = document.querySelectorAll('.GV_exibicaodadosdoseventos');
            let GV_nomedosgostos = Object.keys(GV_arrayeventos[0].visualizacoes);
            
            
            GV_todasareasdeedicao.forEach(function(area){
                let GV_indexdoditoevento = GV_idindexevento(area.getAttribute("data-index"));
                let GV_valoresdosgostos = Object.values(GV_arrayeventos[GV_indexdoditoevento].visualizacoes);
                console.log(GV_valoresdosgostos);
                let GV_legenda = area.querySelector('div.chart');
                //pegar os valores par calculo de saber os 4 gostos com mais visualizações
                let ED_Array_visu_gostos = new Array();
                ED_Array_visu_gostos[0] = GV_arrayeventos[GV_indexdoditoevento].visualizacoes.gosto1;
                ED_Array_visu_gostos[1] = GV_arrayeventos[GV_indexdoditoevento].visualizacoes.gosto2;
                ED_Array_visu_gostos[2] = GV_arrayeventos[GV_indexdoditoevento].visualizacoes.gosto3;
                ED_Array_visu_gostos[3] = GV_arrayeventos[GV_indexdoditoevento].visualizacoes.gosto4;
                ED_Array_visu_gostos[4] = GV_arrayeventos[GV_indexdoditoevento].visualizacoes.gosto5;
                ED_Array_visu_gostos[5] = GV_arrayeventos[GV_indexdoditoevento].visualizacoes.gosto6;
                ED_Array_visu_gostos[6] = GV_arrayeventos[GV_indexdoditoevento].visualizacoes.gosto7;
                ED_Array_visu_gostos[7] = GV_arrayeventos[GV_indexdoditoevento].visualizacoes.gosto8;
                ED_Array_visu_gostos[8] = GV_arrayeventos[GV_indexdoditoevento].visualizacoes.gosto9;
                ED_Array_visu_gostos[9] = GV_arrayeventos[GV_indexdoditoevento].visualizacoes.gosto10;
                ED_Array_visu_gostos[10] = GV_arrayeventos[GV_indexdoditoevento].visualizacoes.gosto11;
                ED_Array_visu_gostos[11] = GV_arrayeventos[GV_indexdoditoevento].visualizacoes.gosto12;
                
                
                //calculo de saber os 4 gostos com mais visualizações
                let ED_array_maiores_visu_gostos = new Array(0,0,0,0);
                var ED_comparacao = 0;
                let ED_array_id_gostos = new Array(0,0,0,0);
                
                for (let i = 0; i < 12; i++) {
                    if(ED_Array_visu_gostos[i] > ED_comparacao){
                        ED_comparacao = ED_Array_visu_gostos[i];
                        ED_array_maiores_visu_gostos[0] = ED_comparacao;
                        ED_array_id_gostos[0] = i+1;
                    }
                }
                
                ED_comparacao = 0;
                
                for (let i = 0; i < 12; i++) {
                    if(ED_Array_visu_gostos[i] > ED_comparacao && ED_Array_visu_gostos[i] < ED_array_maiores_visu_gostos[0]){
                        ED_comparacao = ED_Array_visu_gostos[i];
                        ED_array_maiores_visu_gostos[1] = ED_comparacao;
                        ED_array_id_gostos[1] = i+1;
                    }
                }
                
                ED_comparacao = 0;
                
                for (let i = 0; i < 12; i++) {
                    if(ED_Array_visu_gostos[i] > ED_comparacao && ED_Array_visu_gostos[i] < ED_array_maiores_visu_gostos[1]){
                        ED_comparacao = ED_Array_visu_gostos[i];
                        ED_array_maiores_visu_gostos[2] = ED_comparacao;
                        ED_array_id_gostos[2] = i+1;
                    }
                }
                
                ED_comparacao = 0;
                
                for (let i = 0; i < 12; i++) {
                    if(ED_Array_visu_gostos[i] > ED_comparacao && ED_Array_visu_gostos[i] < ED_array_maiores_visu_gostos[2]){
                        ED_comparacao = ED_Array_visu_gostos[i];
                        ED_array_maiores_visu_gostos[3] = ED_comparacao;
                        ED_array_id_gostos[3] = i+1;
                    }
                }


                GV_legenda.innerHTML =                 
                `<abbr title="${GV_nomedosgostos[ED_array_id_gostos[0]]}: ${GV_valoresdosgostos[ED_array_id_gostos[0]]}"><div class="bar" id="gosto-1" ></div></abbr>
                <abbr title="${GV_nomedosgostos[ED_array_id_gostos[1]]}: ${GV_valoresdosgostos[ED_array_id_gostos[1]]}"><div class="bar" id="gosto-2" ></div></abbr>
                <abbr title="${GV_nomedosgostos[ED_array_id_gostos[2]]}: ${GV_valoresdosgostos[ED_array_id_gostos[2]]}"><div class="bar" id="gosto-3" ></div></abbr>
                <abbr title="${GV_nomedosgostos[ED_array_id_gostos[3]]}: ${GV_valoresdosgostos[ED_array_id_gostos[3]]}"><div class="bar" id="gosto-4" ></div></abbr>`

                var ED_barra_1 = area.querySelector('#gosto-1');
                var ED_barra_2 = area.querySelector('#gosto-2');
                var ED_barra_3 = area.querySelector('#gosto-3');
                var ED_barra_4 = area.querySelector('#gosto-4');
                

                //calcular escala adaptavel
                var fatorEscala = 200 / ED_array_maiores_visu_gostos[0]; 
                
                // Calcula as novas alturas proporcionalmente ao valor recebido
                var novaAltura1 = ED_array_maiores_visu_gostos[0] * fatorEscala;
                var novaAltura2 = ED_array_maiores_visu_gostos[1] * fatorEscala;
                var novaAltura3 = ED_array_maiores_visu_gostos[2] * fatorEscala;
                var novaAltura4 = ED_array_maiores_visu_gostos[3] * fatorEscala;
                
                
                // Define as novas alturas das barras
                ED_barra_1.style.height = novaAltura1 + 'px';
                ED_barra_2.style.height = novaAltura2 + 'px';
                ED_barra_3.style.height = novaAltura3 + 'px';
                ED_barra_4.style.height = novaAltura4 + 'px';
                
                
            })
            
            
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


/*
function ajustarAlturaDasBarras(ED_idevento, ED_indexevento, ED_arrayevento) {

    var ED_strid = '';
    ED_strid = `[data-index="${ED_idevento}"] gosto-`
    const ED_objdados = lerdadosevento().evento;

    var ED_barra_1 = document.querySelector(ED_strid + '1');
    var ED_barra_2 = document.getElementById('gosto-2');
    var ED_barra_3 = document.getElementById('gosto-3');
    var ED_barra_4 = document.getElementById('gosto-4');

    // Calcula as novas alturas proporcionalmente ao valor recebido
    var novaAltura1 = ED_visuObj.visualizacao[0].visualizacao * fatorEscala;
    var novaAltura2 = ED_visuObj.visualizacao[1].visualizacao * fatorEscala;
    var novaAltura3 = ED_visuObj.visualizacao[2].visualizacao * fatorEscala;
    var novaAltura4 = ED_visuObj.visualizacao[3].visualizacao * fatorEscala;
    


    // Define as novas alturas das barras
    ED_barra_1.style.height = novaAltura1 + 'px';
    ED_barra_2.style.height = novaAltura2 + 'px';
    ED_barra_3.style.height = novaAltura3 + 'px';
    ED_barra_4.style.height = novaAltura4 + 'px';
}*/


function codigo(estilosdoseventovalores){

    const GV_abameuseventosedit = document.querySelector('div.GV_abameuseventos');
    const GV_areadoseventosfavoritos = document.querySelector('div.GV_abameusfavoritos');
    const GV_btnabadoseventosfav = document.querySelector('button.GV_favoritosabamenor');
    const GV_btnabadoseventosmeusedit = document.querySelector('button.GV_meuseventosabamenor');
    const GV_btnabadoseventosmeuseditid = document.getElementById('GV_btnmeuseventos');
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

    var OBJ_mostrarNomer = lerdadosevento();
    
    var nome_usuario = document.getElementById('nome_no_perfil');
    var foto_usuario = document.getElementById('foto_perfil_ED');



    if (nome_usuario) {
        // Altera o conteúdo do elemento
        nome_usuario.textContent = OBJ_mostrarNomer.usuario.username; 
    } else {
        console.error('Elemento com id "nome_no_perfil" não encontrado.');
    }
    if (foto_usuario) {
        // Altera o conteúdo do elemento
        foto_usuario.src = OBJ_mostrarNomer.usuario.foto_perfil; 
    } else {
        console.error('Elemento com id "foto_perfil_ED" não encontrado.');
    }
    
    
    var listaimagensevento = [];
    var novaArr = [];
    
    
    
    var vnomedoevento = false, vlocaldoevento = false, vgastomedio = true, vestiloevento = false, vdescricaoevento = false, vimagensevento = false, vdataevento = false, GV_vlinkcontato = false;


    GV_mostrareventosparaedicao(lerdadosevento().evento)
    salvardadosevento(lerdadosevento());
    GV_mostrareventosfavoritos();
    const GV_botaoexcluirevento = document.querySelector('.GV_botaoparaexcluiroevento');

    GV_areadoseventosfavoritos.addEventListener('click',(favevent) => {
        if(favevent.target.getAttribute('class') == 'GV_vermaisbtn'){
            location.href = `evento.html?id=${favevent.target.getAttribute('data-id')}`
        }else if(favevent.target.getAttribute('class') == 'GV_excluirbtn'){
            let GV_objetodadosfav = lerdadosevento();
            let GV_iddoeventofav = favevent.target.getAttribute('data-id');
            let GV_indexdoeventofav = -1;
            let GV_contfav= 0
            let GV_indexusuario = -1;
            let GV_contusuario = 0;
            let GV_indexevento = GV_idindexevento(GV_iddoeventofav)
            do
            {
                if(GV_objetodadosfav.listadeusuarios[GV_contusuario].ID == GV_objetodadosfav.usuario.ID)
                {
                    GV_indexusuario = GV_contusuario;
                }
                GV_contusuario = GV_contusuario + 1;
            }
            while(GV_contusuario < GV_objetodadosfav.listadeusuarios.length && GV_indexusuario == -1);
            do
            {
                if(GV_objetodadosfav.usuario.favoritos[GV_contfav] == GV_iddoeventofav)
                {
                    GV_indexdoeventofav = GV_contfav;
                }
                GV_contfav = GV_contfav + 1;
            }
            while(GV_contfav < GV_objetodadosfav.usuario.favoritos.length && GV_indexdoeventofav == -1);
            console.log(GV_indexusuario);
            if(GV_indexdoeventofav >= 0 && GV_indexusuario >= 0)
            {
                if(GV_indexevento > 0){
                    GV_objetodadosfav.evento[GV_indexevento].favoritos = GV_objetodadosfav.evento[GV_indexevento].favoritos - 1;
                }
                GV_objetodadosfav.usuario.favoritos.splice(GV_indexdoeventofav, 1);
                GV_objetodadosfav.listadeusuarios[GV_indexusuario].favoritos.splice(GV_indexdoeventofav, 1);
                salvardadosevento(GV_objetodadosfav);
                GV_mostrareventosfavoritos();
            }
        }
        
    })

    GV_btnabadoseventosmeusedit.addEventListener('click', () => {
        GV_areadoseventosfavoritos.classList.add('hidden')
        GV_btnabadoseventosfav.classList.remove('GV_botaoerguido');
        GV_btnabadoseventosmeusedit.classList.add('GV_botaoerguido');
        GV_abameuseventosedit.classList.remove('hidden');
        GV_btnabadoseventosmeuseditid.style.boxShadow = "none";
    })

    GV_btnabadoseventosfav.addEventListener('click', () => {
        GV_areadoseventosfavoritos.classList.remove('hidden')
        GV_btnabadoseventosfav.classList.add('GV_botaoerguido');
        GV_btnabadoseventosmeusedit.classList.remove('GV_botaoerguido');
        GV_abameuseventosedit.classList.add('hidden');
    })

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
            dadosdosformularios.visualizacoes = {
                total: 0,
                gosto1: 0,
                gosto2: 0,
                gosto3: 0,
                gosto4: 0,
                gosto5: 0,
                gosto6: 0,
                gosto7: 0,
                gosto8: 0,
                gosto9: 0,
                gosto10: 0,
                gosto11: 0,
                gosto12: 0,
            };
            dadosdosformularios.favoritos = 0;
            dadosdosformularios.comentarios = [];
            dadosdosformularios.donodoevento = lerdadosevento().usuario.ID;
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

function MultiSelectTag(e,t={shadow:!1,rounded:!0}){var n=null,l=null,a=null,d=null,s=null,o=null,i=null,r=null,c=null,u=null,v=null,p=null,h=t.tagColor||{};h.textColor="#0372B2",h.borderColor="#0372B2",h.bgColor="#C0E6FC";var m=new DOMParser;function g(e,t,n=!1){const l=document.createElement("li");l.innerHTML="<input type='checkbox' style='margin:0 0.5em 0 0' class='input_checkbox'>",l.innerHTML+=e.label,l.dataset.value=e.value;const a=l.firstChild;a.dataset.value=e.value,t&&e.label.toLowerCase().startsWith(t.toLowerCase())?p.appendChild(l):t||p.appendChild(l),n&&(l.style.backgroundColor=h.bgColor,a.checked=!0)}function f(e=null){for(var t of(p.innerHTML="",l))t.selected?(!b(t.value)&&C(t),g(t,e,!0)):g(t,e)}function C(e){const t=document.createElement("div");t.classList.add("item-container"),t.style.color=h.textColor||"#2c7a7b",t.style.borderColor=h.borderColor||"#81e6d9",t.style.background=h.bgColor||"#e6fffa";const n=document.createElement("div");n.classList.add("item-label"),n.style.color=h.textColor||"#2c7a7b",n.innerHTML=e.label,n.dataset.value=e.value;const a=m.parseFromString('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-close-svg">\n                <line x1="18" y1="6" x2="6" y2="18"></line>\n                <line x1="6" y1="6" x2="18" y2="18"></line>\n            </svg>',"image/svg+xml").documentElement;a.addEventListener("click",(t=>{l.find((t=>t.value==e.value)).selected=!1,w(e.value),f(),E()})),t.appendChild(n),t.appendChild(a),i.append(t)}function L(){for(var e of p.children)e.addEventListener("click",(e=>{!1===l.find((t=>t.value==e.target.dataset.value)).selected?(l.find((t=>t.value==e.target.dataset.value)).selected=!0,c.value=null,f(),E()):(l.find((t=>t.value==e.target.dataset.value)).selected=!1,c.value=null,f(),E(),w(e.target.dataset.value))}))}function b(e){for(var t of i.children)if(!t.classList.contains("input-body")&&t.firstChild.dataset.value==e)return!0;return!1}function w(e){for(var t of i.children)t.classList.contains("input-body")||t.firstChild.dataset.value!=e||i.removeChild(t)}function E(e=!0){selected_values=[];for(var a=0;a<l.length;a++)n.options[a].selected=l[a].selected,l[a].selected&&selected_values.push({label:l[a].label,value:l[a].value});e&&t.hasOwnProperty("onChange")&&t.onChange(selected_values)}n=document.getElementById(e),function(){l=[...n.options].map((e=>({value:e.value,label:e.label,selected:e.selected}))),n.classList.add("hidden"),(a=document.createElement("div")).classList.add("mult-select-tag"),(d=document.createElement("div")).classList.add("wrapper"),(o=document.createElement("div")).classList.add("body"),t.shadow&&o.classList.add("shadow"),t.rounded&&o.classList.add("rounded"),(i=document.createElement("div")).classList.add("input-container"),(c=document.createElement("input")).classList.add("input"),c.placeholder=`${t.placeholder||"Search..."}`,(r=document.createElement("inputBody")).classList.add("input-body"),r.append(c),o.append(i),(s=document.createElement("div")).classList.add("btn-container"),(u=document.createElement("button")).type="button",s.append(u);const e=m.parseFromString('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n                <polyline points="18 15 12 21 6 15"></polyline>\n            </svg>',"image/svg+xml").documentElement;u.append(e),o.append(s),d.append(o),(v=document.createElement("div")).classList.add("drawer","hidden"),t.shadow&&v.classList.add("shadow"),t.rounded&&v.classList.add("rounded"),v.append(r),p=document.createElement("ul"),v.appendChild(p),a.appendChild(d),a.appendChild(v),n.nextSibling?n.parentNode.insertBefore(a,n.nextSibling):n.parentNode.appendChild(a)}(),f(),L(),E(!1),u.addEventListener("click",(()=>{v.classList.contains("hidden")?(f(),L(),v.classList.remove("hidden"),c.focus()):v.classList.add("hidden")})),c.addEventListener("keyup",(e=>{f(e.target.value),L()})),c.addEventListener("keydown",(e=>{if("Backspace"===e.key&&!e.target.value&&i.childElementCount>1){const e=o.children[i.childElementCount-2].firstChild;l.find((t=>t.value==e.dataset.value)).selected=!1,w(e.dataset.value),E()}})),window.addEventListener("click",(e=>{a.contains(e.target)||("LI"!==e.target.nodeName&&"input_checkbox"!==e.target.getAttribute("class")?v.classList.add("hidden"):L())}))}

function MultiSelectTag2(el, customs = { shadow: false, rounded: true }) {
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



function deslogar(){
    var logado = false;
    let GV_objdadosusuario = lerdadosevento();
    GV_objdadosusuario.usuario = {};
    salvardadosevento(GV_objdadosusuario);
    location.href = "index.html";
    alert('deslogado com sucesso');
    sessionStorage.setItem("logado", logado);
 }
 function ir_para_alteracao(){
    location.href = "editar_perfil.html";
 }



function cadastro(ED_estilos){
 
    // Coletar valores dos inputs
    var  ED_username = document.getElementById('username').value;
    var  ED_senha = document.getElementById('senha_criar').value;
    var  ED_email = document.getElementById('email').value;
    var  ED_foto_perfil = document.getElementById('foto_perfil').value;
    var ED_iD_usuario = Date.now();
    var  ED_precoMedio = document.getElementById('preco-médio-usuario').value;
    var gostosSelect = document.getElementById('gostos');
    var ED_gostos = ED_estilos;
    //var ED_gostos = Array.from(gostosSelect.selectedOptions).map(option => option.value);
    var ED_moeda = document.querySelector('.form-select').value;
    
    //variavel para saber se esta logado
    var ED_logado = false;


    //variavel para validação
    var ED_username_conf = false, ED_senha_conf = false, ED_preco_conf = false;

    //validação do username
    if(ED_username.length < 5){
        alert('ERRO: username deve ter mais que 5 caracteres');
    }
    else{
        ED_username_conf= true;
    }
    
    //validação da senha
    if(ED_senha.length < 5){
        alert('ERRO: senha deve ter mais que 5 caracteres');
    }
    else{
        ED_senha_conf = true;
    }

    //validação preco
    if(ED_precoMedio < 10){
        alert('ERRO: valor muito baixo');
    }
    else{
        ED_preco_conf = true;
    }

 



    if(ED_username_conf && ED_senha_conf && ED_preco_conf){
         // Criar objeto usuário
     const usuario = {
        username: ED_username,
        senha: ED_senha,
        email: ED_email,
        foto_perfil: ED_foto_perfil,
        ID: ED_iD_usuario,
        precoMedio: ED_precoMedio,
        gostos: ED_gostos,
        moeda: ED_moeda,
        favoritos: [],
        visualizou: [],
    };

        
    // Armazenar objeto usuário no localStorage
    GV_salvardadosdousuarioatual(usuario);
    //localStorage.setItem('usuario', JSON.stringify(usuario));
        
    ED_logado = true;
    sessionStorage.setItem("logado", ED_logado);

    location.href = "index.html";

    // Exibir mensagem de sucesso 
    alert('Usuário cadastrado com sucesso!');
    }
    else{
        location.href = "cadastrar.html";
    }

 
}

function editarperfilcad(ED_estilos){
    let GV_objdadosusuario = lerdadosevento();
    // Coletar valores dos inputs
    var  ED_username = document.getElementById('username').value;
    var  ED_senha = document.getElementById('senha_criar').value;
    var  ED_email = document.getElementById('email').value;
    var  ED_foto_perfil = document.getElementById('foto_perfil2').value;
    var  ED_precoMedio = document.getElementById('preco-médio-usuario').value;
    var gostosSelect = document.getElementById('gostos');
    var ED_gostos = ED_estilos;
    //var ED_gostos = Array.from(gostosSelect.selectedOptions).map(option => option.value);
    var ED_moeda = document.querySelector('.form-select').value;
    
    //variavel para saber se esta logado
    var ED_logado = false;


    //variavel para validação
    var ED_username_conf = false, ED_senha_conf = false, ED_preco_conf = false;

    //validação do username
    if(ED_username.length < 5){
        alert('ERRO: username deve ter mais que 5 caracteres');
    }
    else{
        ED_username_conf= true;
    }
    
    //validação da senha
    if(ED_senha.length < 5){
        alert('ERRO: senha deve ter mais que 5 caracteres');
    }
    else{
        ED_senha_conf = true;
    }

    //validação preco
    if(ED_precoMedio < 10){
        alert('ERRO: valor muito baixo');
    }
    else{
        ED_preco_conf = true;
    }

 



    if(ED_username_conf && ED_senha_conf && ED_preco_conf){
         // Criar objeto usuário
     const usuario = {
        username: ED_username,
        senha: ED_senha,
        email: ED_email,
        foto_perfil: ED_foto_perfil,
        ID: GV_objdadosusuario.usuario.ID,
        precoMedio: ED_precoMedio,
        gostos: ED_gostos,
        moeda: ED_moeda,
        favoritos: GV_objdadosusuario.usuario.favoritos,
        visualizou: GV_objdadosusuario.usuario.visualizou,
    };

        
    // Armazenar objeto usuário no localStorage
    GV_modificardadosdousuarioatual(usuario);
    //localStorage.setItem('usuario', JSON.stringify(usuario));
    ED_logado = true;
    sessionStorage.setItem("logado", ED_logado);

    location.href = "index.html";

    // Exibir mensagem de sucesso 
    alert('Usuário cadastrado com sucesso!');
    }
    else{
        location.href = "cadastrar.html";
    }
}

function logar (){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    var ED_logado = false;
    // Recupera o objeto do localStorage
    var objetoArmazenado = localStorage.getItem('bd_ShowTimeSeeker');

    // Converte o objeto de volta para um objeto 
    let GV_objetoJS = JSON.parse(objetoArmazenado); 
    
    
    let GV_contadorusuario = -1;
    let GV_acheiousuario = false; 
    do
    {
        GV_contadorusuario = GV_contadorusuario + 1;
        GV_acheiousuario = GV_objetoJS.listadeusuarios[GV_contadorusuario].username == login;
    }
    while(GV_contadorusuario < GV_objetoJS.listadeusuarios.length - 1 && !GV_acheiousuario);

    var objetoJS = GV_objetoJS.listadeusuarios[GV_contadorusuario];
    //armazenar os valores das classes em uma variavel
    var ED_senha_correta = objetoJS.senha;
    var ED_usuario_correto = objetoJS.username; 
    
    if(login == ED_usuario_correto && senha == ED_senha_correta){
        alert('Bem vindo!');
        GV_objetoJS.usuario = objetoJS;
        salvardadosevento(GV_objetoJS);
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

function paginadoevento(objeto_evento, indexdoevento) {
    // Elementos do DOM que serão preenchidos dinamicamente
    let nomeEventoElem = document.getElementById('nomeEvento');
    let localEventoElem = document.getElementById('localEvento');
    let dataEventoElem = document.getElementById('dataEvento');
    let descricaoEventoElem = document.getElementById('descricaoEvento');
    let favoritadosElem = document.getElementById('favoritados');
    let visualizacoesTotaisElem = document.getElementById('visualizacoesTotais');
    let carouselInner = document.getElementById('carouselInner');
    let divcomentariosevento = document.getElementById('comentados');
    let botaoDeContato = document.getElementById('botao_de_contato'); 
    let botaoDefav = document.getElementById('botaoFavoritar');
    
    //botão para favoritar
    botaoDefav.addEventListener('click', function() {
        objeto_evento = favoritar(objeto_evento, indexdoevento);
        salvardadosevento(objeto_evento);
        location.reload();
    });
    
    objeto_evento = ED_vusualizacao(objeto_evento, indexdoevento);

    // Função para criar elementos de comentário
    function criarElementoComentario(comentarioObj) {
        let divComentario = document.createElement('div');
        divComentario.classList.add('comentario');

        let nomeUsuario = document.createElement('span');
        nomeUsuario.classList.add('usuario-comentario');
        nomeUsuario.textContent = comentarioObj.usuario.username + ': '; // Nome do usuário que comentou

        let textoComentario = document.createElement('span');
        textoComentario.textContent = comentarioObj.texto; // Texto do comentário

        divComentario.appendChild(nomeUsuario);
        divComentario.appendChild(textoComentario);

        return divComentario;
    }

    // Preencher o carrossel com as fotos do evento
    objeto_evento.evento[indexdoevento].fotos.forEach((foto, index) => {
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

    // Preencher as informações do evento
    nomeEventoElem.textContent = objeto_evento.evento[indexdoevento].nome_do_evento;
    localEventoElem.textContent = objeto_evento.evento[indexdoevento].local;
    dataEventoElem.textContent = objeto_evento.evento[indexdoevento].data.split('-').reverse().join('/');
    descricaoEventoElem.innerHTML = objeto_evento.evento[indexdoevento].descricao.replace('\n', '</br>');
    favoritadosElem.textContent = objeto_evento.evento[indexdoevento].favoritos;
    visualizacoesTotaisElem.textContent = objeto_evento.evento[indexdoevento].visualizacoes.total;

    // Limpar a div de comentários antes de adicionar novamente
    divcomentariosevento.innerHTML = '';
    
    // Adicionar divs para cada comentário
    objeto_evento.evento[indexdoevento].comentarios.forEach(comentario => {
        let divComentario = criarElementoComentario(comentario);
        divcomentariosevento.appendChild(divComentario);
    });

    // Adicionar evento para o botão de comentar
    let botaoComentar = document.getElementById('botaoComentar');
    botaoComentar.addEventListener('click', function() {
        let comentarioTexto = document.getElementById('areaComentarios').value.trim();
        if (comentarioTexto !== '') {
            let novoComentario = {
                texto: comentarioTexto,
                usuario: {
                    username: objeto_evento.usuario.username // Nome de usuário que está comentando
                }
            };
            objeto_evento.evento[indexdoevento].comentarios.push(novoComentario);
            // Limpar o campo de comentário
            document.getElementById('areaComentarios').value = '';
            // Salvar de volta no Local Storage
            salvardadosevento(objeto_evento);
            // Atualizar a exibição dos comentários
            divcomentariosevento.innerHTML = '';
            objeto_evento.evento[indexdoevento].comentarios.forEach(comentario => {
                let divComentario = criarElementoComentario(comentario);
                divcomentariosevento.appendChild(divComentario);
            });
        }
    }); 
    //botão para ir para o contato do evento
    botaoDeContato.addEventListener('click', function() {
        botaoDeContato.href = objeto_evento.evento[indexdoevento].linkcontato;
    });

}


function ED_vusualizacao(objeto_evento, indexdoevento) {
    let indexusuariovizu = indexdousuario(objeto_evento.usuario.ID, objeto_evento);
    console.log(indexusuariovizu);
    let nomeDoEvento = objeto_evento.evento[indexdoevento].id;
    let visualizacoesUsuario = objeto_evento.usuario.visualizou;
    let ED_gostosusuario = objeto_evento.usuario.gostos;
    let ED_gostosusuarioTam = objeto_evento.usuario.gostos.length;
    let listaletvisualizacoesUsuario = objeto_evento.listadeusuarios[indexusuariovizu].visualizou;
    
    // Verificar se o evento já foi visualizado pelo usuário
    if (!listaletvisualizacoesUsuario.includes(nomeDoEvento)) {
        visualizacoesUsuario.push(nomeDoEvento); // Registrar que o evento foi visualizado
        listaletvisualizacoesUsuario.push(nomeDoEvento);

        // Verificar se objeto_evento.evento existe
        if (objeto_evento.evento[indexdoevento]) {
            // Verificar se objeto_evento.evento.visualizacoes existe e tem a propriedade total
            if (objeto_evento.evento[indexdoevento].visualizacoes && objeto_evento.evento[indexdoevento].visualizacoes.total !== undefined) {
                objeto_evento.evento[indexdoevento].visualizacoes.total++; // Incrementar o contador de visualizações totais
                for(let i = 0; i<ED_gostosusuarioTam; i++){
                    if(ED_gostosusuario[i] == 1){
                        objeto_evento.evento[indexdoevento].visualizacoes.gosto1++;
                    }
                    if(ED_gostosusuario[i] == 2){
                        objeto_evento.evento[indexdoevento].visualizacoes.gosto2++;
                    }
                    if(ED_gostosusuario[i] == 3){
                        objeto_evento.evento[indexdoevento].visualizacoes.gosto3++;
                    }
                    if(ED_gostosusuario[i] == 4){
                        objeto_evento.evento[indexdoevento].visualizacoes.gosto4++;
                    }
                    if(ED_gostosusuario[i] == 5){
                        objeto_evento.evento[indexdoevento].visualizacoes.gosto5++;
                    }
                    if(ED_gostosusuario[i] == 6){
                        objeto_evento.evento[indexdoevento].visualizacoes.gosto6++;
                    }
                    if(ED_gostosusuario[i] == 7){
                        objeto_evento.evento[indexdoevento].visualizacoes.gosto7++;
                    }
                    if(ED_gostosusuario[i] == 8){
                        objeto_evento.evento[indexdoevento].visualizacoes.gosto8++;
                    }
                    if(ED_gostosusuario[i] == 9){
                        objeto_evento.evento[indexdoevento].visualizacoes.gosto9++;
                    }
                    if(ED_gostosusuario[i] == 10){
                        objeto_evento.evento[indexdoevento].visualizacoes.gosto10++;
                    }
                    if(ED_gostosusuario[i] == 11){
                        objeto_evento.evento[indexdoevento].visualizacoes.gosto11++;
                    }
                    if(ED_gostosusuario[i] == 12){
                        objeto_evento.evento[indexdoevento].visualizacoes.gosto12++;
                    }
                }
            } else {
                console.error(`Propriedade 'visualizacoes' ou 'total' não está definida em objeto_evento.evento[${indexdoevento}]`);
            }
        } else {
            console.error(`Evento com índice ${indexdoevento} não está definido em objeto_evento.evento`);
        }
    }
    salvardadosevento(objeto_evento);
    
    return objeto_evento;
}
//salvar na lista de usuarios


function indexdousuario(ID_usuario, objeto_evento){
   let tamanholista = objeto_evento.listadeusuarios.length;
   let i = 0;
   while(i<tamanholista){
    if( objeto_evento.listadeusuarios[i].ID === ID_usuario){
        return i;
    }
    i++;
   }
}
function favoritar(objeto_evento, indexdoevento) {
    // Encontrar o índice do usuário com base no ID
    let indexusuariofav = indexdousuario(objeto_evento.usuario.ID, objeto_evento);

    if (indexusuariofav === -1) {
        console.error(`Usuário com ID ${objeto_evento.usuario.ID} não encontrado na lista de usuários`);
        return objeto_evento;
    }

    let nomeDoEvento = objeto_evento.evento[indexdoevento].id;
    let listaFavoritosUsuario = objeto_evento.listadeusuarios[indexusuariofav].favoritos;
    let favoritousuario = objeto_evento.usuario.favoritos;

    // Verificar se o evento já está nos favoritos do usuário
    if (!listaFavoritosUsuario.includes(nomeDoEvento)) {
        listaFavoritosUsuario.push(nomeDoEvento); 
        favoritousuario.push(nomeDoEvento);

        // Verificar se objeto_evento.evento existe
        if (objeto_evento.evento[indexdoevento]) {
            // Incrementar o contador de favoritos se a propriedade existir
            if (objeto_evento.evento[indexdoevento].favoritos !== undefined) {
                objeto_evento.evento[indexdoevento].favoritos++;
            } else {
                // Se 'favoritos' não estiver definido, inicializá-lo com 1
                objeto_evento.evento[indexdoevento].favoritos = 1;
            }
        } else {
            console.error(`Evento com índice ${indexdoevento} não está definido em objeto_evento.evento`);
        }

        // Salvar as alterações no Local Storage ou no servidor
        salvardadosevento(objeto_evento);
        console.log(`Evento '${nomeDoEvento}' adicionado aos favoritos do usuário`);
    } else {
        console.log(`Evento '${nomeDoEvento}' já está nos favoritos do usuário`);
    }

    return objeto_evento;
}