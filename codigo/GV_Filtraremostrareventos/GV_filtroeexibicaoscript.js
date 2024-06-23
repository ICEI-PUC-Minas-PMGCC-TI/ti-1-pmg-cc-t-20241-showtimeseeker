function GV_lerdadoseventodobancodedados()
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
                                    data: "2024-06-06",
                                    descricao: "Em Maio temos mais um encontro marcado no Rancho Bill para comemorarmos o Bday do Felipe Arruda.\nUm super line, numa junção de muita vibe que o Rancho já tem, com a vibe que BH inteira já conhece das nossas festas. \nVai ser mais um DOMINGO de muita vibe, alegria e uma comemoração inesquecível.",
                                    fotos: ["https://source.unsplash.com/random/1000x600?sig=0", "https://source.unsplash.com/random/1000x600?sig=1"],
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
                                    data: "2024-05-19",
                                    descricao: "Venha se juntar a nós para celebrar a tradição e a alegria da Festa Junina do Rotary Club de Belo Horizonte - Barro Preto! No dia 8 de junho de 2024, a partir das 14h, o Colégio São Paulo, localizado na Rua Olímpio de Assis 190, Cidade Jardim, Belo Horizonte/MG, será o palco para essa festa cheia de diversão e cultura.",
                                    fotos: ["https://source.unsplash.com/random/1000x600?sig=2", "https://source.unsplash.com/random/1000x600?sig=3"],
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
                                    data: "2024-07-08",
                                    descricao: "Apresento a vocês nosso projeto K-pop Brasil Fest que vem com tudo no bairro de Niterói, em um novo local com um auditório belíssimo para confortar vocês que amam K-pop e cultura Coreana",
                                    fotos: ["https://source.unsplash.com/random/1000x600?sig=3", "https://source.unsplash.com/random/1000x600?sig=4"],
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

const GV_bd_STS = GV_lerdadoseventodobancodedados();

window.onload = GV_codigo();

function GV_verificargostos(GV_arraygostosevento = [], GV_arraygostosfiltro = []){
    let GV_arrayresposta = [];
    let GV_resultadogostos = false;
    GV_arrayresposta = GV_arraygostosfiltro.filter(GV_testegosto => !GV_arraygostosevento.includes(GV_testegosto));
    //console.log(GV_arrayresposta);
    if(GV_arrayresposta.length == 0){GV_resultadogostos = true;}
    return(GV_resultadogostos);
}

function GV_mostrareventos(GV_arrayeventos, GV_arrayfiltros, GV_gastosmediofiltro) {
    const GV_cardgrande = document.getElementById('card-container');
    const GV_cardsmenores = document.getElementById('GV_cardsmenorescontainer');

    let GV_stringcards = '';
    let GV_stringcardgrande = '';
    let GV_primeiroevento = 0;
    
    for(let GV_imevento = 1; GV_imevento < GV_arrayeventos.length; GV_imevento = GV_imevento + 1)
        {
            let GV_objevento = GV_arrayeventos[GV_imevento];
            //if(GV_gastosmediofiltro == "NaN"){console.log('cv')}
            if((GV_gastosmediofiltro == undefined || GV_gastosmediofiltro == "NaN" || GV_conversaoparareal(GV_objevento.preco.valor, GV_objevento.preco.moeda) <= GV_gastosmediofiltro) && GV_verificargostos(GV_objevento.estilodoevento, GV_arrayfiltros)){
                if(!GV_primeiroevento){
                    GV_stringcardgrande = `<img src="${GV_objevento.fotos[0]}" id="card-imagem" class="card-img" alt="foto">
                    <div class="card-img-overlay">
                    <h5 class="card-title GV_titulocardgrande">${GV_objevento.nome_do_evento}</h5>
                    <p class="card-text GV_card-text">${GV_objevento.descricao.replaceAll('\n', '<br>')}</p>
                    </div>`;
                    GV_primeiroevento = 1;
                } 
                else
                {
                    GV_stringcards = GV_stringcards + `
                    <div class="col" id="card-menor">
                        <div class="card h-100">
                            <img src="${GV_objevento.fotos[0]}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${GV_objevento.nome_do_evento}</h5>
                                <p class="card-text">${GV_objevento.descricao.replaceAll('\n', '<br>')}</p>
                            </div>
                        </div>
                    </div>`;
                    
                }
            }
        }
        GV_cardsmenores.innerHTML = GV_stringcards;
        GV_cardgrande.innerHTML = GV_stringcardgrande;
}

function GV_conversaoparareal(GV_valoremoutramoeda, GV_tipodamoeda){
    let valoremreal = 0;
    let cotacaodolar = 5.11;
    let cotacaoeuro = 5.55;

    if(GV_tipodamoeda == '$'){
        valoremreal = GV_valoremoutramoeda * cotacaodolar;
    }else if(GV_tipodamoeda == '€'){
        valoremreal = GV_valoremoutramoeda * cotacaoeuro;
    }else{
        valoremreal = GV_valoremoutramoeda;
    }
    return(valoremreal);
}

function GV_codigo(){
    
    const GV_botaodofiltro = document.getElementById("GV_botaodofiltro");
    const GV_gastomedio = document.getElementById('GV_preco');
    const GV_menufiltro = document.getElementById('GV_Menufiltro');
    const GV_filtroformulario = document.getElementById('GV_filtroformulario');
    var GV_preco;
    var GV_keysfiltro;
    var GV_moedafiltro;

        //Validacao do gasto medio do evento
    GV_mostrareventos(GV_bd_STS.evento, GV_keysfiltro, GV_preco);
    GV_gastomedio.addEventListener('change', function(){
        /*if(GV_gastomedio.value == ''){
                GV_gastomedio.value = 0;
        }*/
        GV_gastomedio.value = parseFloat(GV_gastomedio.value).toFixed(2);
    });
    GV_botaodofiltro.addEventListener('click', () =>{
        if(GV_menufiltro.style.display == 'flex'){
            GV_menufiltro.style.display = 'none';
        }else {
            GV_menufiltro.style.display = 'flex';
        }
    });

    GV_filtroformulario.addEventListener('submit', GV_fazerfiltragem =>{
        GV_fazerfiltragem.preventDefault();
        const GV_filformdata = new FormData(GV_filtroformulario);
        var GV_dadosdosformulariosfil = Object.fromEntries(GV_filformdata);
        var GV_valoresdedadosfil = Object.values(GV_dadosdosformulariosfil);
        GV_keysfiltro = Object.keys(GV_dadosdosformulariosfil);
        GV_moedafiltro = GV_valoresdedadosfil.pop();
        GV_preco = GV_valoresdedadosfil.pop();
        GV_keysfiltro.pop();
        GV_keysfiltro.pop();
        GV_preco = GV_conversaoparareal(parseFloat(GV_preco), GV_moedafiltro).toFixed(2);
        GV_mostrareventos(GV_bd_STS.evento, GV_keysfiltro, GV_preco);
    })
    
}