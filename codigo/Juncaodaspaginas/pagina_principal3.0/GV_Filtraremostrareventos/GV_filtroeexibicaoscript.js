const GV_botaomostrarnotificacao = document.querySelector("button.GV_vernotificacao");

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
                                    total: 0,
                                    gosto1: 5,
                                    gosto2: 90,
                                    gosto3: 50000,
                                    gosto4: 50,
                                    gosto5: 1,
                                    gosto6: 60,
                                    gosto7: 600,
                                    gosto8: 44,
                                    gosto9: 9,
                                    gosto10: 4,
                                    gosto11: 89,
                                    gosto12: 15,
                                },
                                favoritos: 1,
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
                                data: "2024-06-30",
                                descricao: "Venha se juntar a nós para celebrar a tradição e a alegria da Festa Junina do Rotary Club de Belo Horizonte - Barro Preto! No dia 8 de junho de 2024, a partir das 14h, o Colégio São Paulo, localizado na Rua Olímpio de Assis 190, Cidade Jardim, Belo Horizonte/MG, será o palco para essa festa cheia de diversão e cultura.",
                                fotos: ["https://fashionistando.uai.com.br/wp-content/uploads/sites/11/2018/06/festa-junina-camarim.jpg", "https://soubh.uai.com.br/uploads/post/image/14267/festas_juninas_em_bh_ingressos_onde_ir.jpg"],
                                id: 1718186421301,
                                linkcontato: "https://www.instagram.com/",
                                estilodoevento: ["1", "3"],
                                visualizacoes: {
                                    total: 0,
                                    gosto1: 3,
                                    gosto2: 10,
                                    gosto3: 50,
                                    gosto4: 1,
                                    gosto5: 100,
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
                                    gosto1: 5,
                                    gosto2: 0,
                                    gosto3: 2,
                                    gosto4: 0,
                                    gosto5: 0,
                                    gosto6: 0,
                                    gosto7: 100,
                                    gosto8: 0,
                                    gosto9: 1,
                                    gosto10: 7,
                                    gosto11: 0,
                                    gosto12: 0,
                                },
                                favoritos: 1,
                                comentarios: [],
                                donodoevento: "",
                            }
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
                            favoritos: [1718186424176, 1718186419035],
                            visualizou: [],
                            foto_perfil: "https://fernandapessoa.com.br/wp-content/uploads/2021/11/jovem-na-escada-curso-fernanda-pessoa-um-novo-tempo-1536x1024.jpg"
                        }
                    ],
                    usuario:{}
            };
        }
        return(objdados);
}

function salvardadosevento(dados){
    localStorage.setItem('bd_ShowTimeSeeker', JSON.stringify(dados));
}

function GV_idindexevento(GV_id)
{
    let GV_dadosdoeventobuscarid = GV_lerdadoseventodobancodedados().evento;
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
    const GV_dadosdabarradepesquisa = document.getElementById('GV_barradepesquisa').value;
    const GV_datafiltro = document.getElementById('GV_data');
    let GV_stringcards = '';
    let GV_stringcardgrande = '';
    let GV_primeiroevento = 0;
    let GV_iddoprimeiro = 0;
    let GV_strlink = ''

    //console.log(GV_datafiltro.value == "" )
    
    for(let GV_imevento = 1; GV_imevento < GV_arrayeventos.length; GV_imevento = GV_imevento + 1)
        {
            let GV_objevento = GV_arrayeventos[GV_imevento];
            if(isUserLoggedIn()){
                GV_strlink = `evento.html?id=${GV_objevento.id}`;
            }else{
                GV_strlink = 'cadastrar.html';
            }
            //if(GV_gastosmediofiltro == "NaN"){console.log('cv')}
            if((GV_gastosmediofiltro == undefined || GV_gastosmediofiltro == "NaN" || GV_conversaoparareal(GV_objevento.preco.valor, GV_objevento.preco.moeda) <= GV_gastosmediofiltro) && GV_verificargostos(GV_objevento.estilodoevento, GV_arrayfiltros) && (GV_dadosdabarradepesquisa == "" || GV_objevento.nome_do_evento.toLowerCase().includes(GV_dadosdabarradepesquisa)) && (GV_datafiltro.value == "" || GV_datafiltro.value == GV_objevento.data)){
                if(!GV_primeiroevento){
                    GV_stringcardgrande = `
                    <a href="${GV_strlink}" class="nenhumadecoracao">
                    <img src="${GV_objevento.fotos[0]}" id="card-imagem" class="card-img" alt="foto">
                    <div class="card-img-overlay">
                    <h5 class="card-title GV_titulocardgrande">${GV_objevento.nome_do_evento}</h5>
                    <p class="card-text GV_card-text">${GV_objevento.descricao.replaceAll('\n', '<br>')}</p>
                    <p class="card-text"><small>Data: ${GV_objevento.data.split('-').reverse().join('/')}</small></p>
                    </div>
                    </a>`;
                    GV_primeiroevento = 1;
                    GV_iddoprimeiro = GV_objevento.id;
                } 
                else
                {
                    GV_stringcards = GV_stringcards + `
                    <div class="col" id="card-menor">
                        <a href="${GV_strlink}" class="col GV_card_menor nenhumadecoracao">
                        <div class="card h-100 GV_corpocard text-bg-dark">
                            <img src="${GV_objevento.fotos[0]}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${GV_objevento.nome_do_evento}</h5>
                                <p class="card-text">${GV_objevento.descricao.replaceAll('\n', '<br>')}</p>
                                <p class="card-text"><small>Data: ${GV_objevento.data.split('-').reverse().join('/')}</small></p>
                            </div>
                        </div>
                        </a>
                    </div>`;
                    
                }
            }
        }
        GV_cardsmenores.innerHTML = GV_stringcards;
        GV_cardgrande.innerHTML = GV_stringcardgrande;
        GV_cardgrande.setAttribute("data-index", GV_iddoprimeiro);
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
function isUserLoggedIn() {
    // Exemplo: verificar um cookie, localStorage ou sessão
    // Aqui, usamos localStorage como exemplo
    return sessionStorage.getItem('logado') === 'true';
}

function GV_codigo(){
 
    
    
    salvardadosevento(GV_lerdadoseventodobancodedados());
    GV_notificacaoevento();

    const GV_botaodofiltro = document.getElementById("GV_botaodofiltro");
    const GV_gastomedio = document.getElementById('GV_preco');
    const GV_menufiltro = document.getElementById('GV_Menufiltro');
    const GV_filtroformulario = document.getElementById('GV_filtroformulario');
    const GV_barradepesquisa = document.getElementById('GV_barradepesquisa');
    const GV_caixabarrapesq = document.querySelector('div.GV_caixabarradepesquisa')

    if(isUserLoggedIn()){
        GV_caixabarrapesq.style.width = 'calc(100%)';
    }else{
        GV_botaomostrarnotificacao.classList.add('hidden');
    }

    var GV_preco;
    var GV_keysfiltro;
    var GV_moedafiltro;

    if (isUserLoggedIn()) {
        // Se o usuário estiver logado, esconder os botões de "Entrar" e "Criar"
        document.querySelectorAll('#botao').forEach(function(button) {
            button.style.display = 'none';
        });
    }
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
        GV_keysfiltro.pop();
        GV_preco = GV_conversaoparareal(parseFloat(GV_preco), GV_moedafiltro).toFixed(2);
        GV_mostrareventos(GV_bd_STS.evento, GV_keysfiltro, GV_preco);
    })
    
    GV_barradepesquisa.addEventListener('input', () =>{GV_mostrareventos(GV_bd_STS.evento, GV_keysfiltro, GV_preco)})
}



function ir_para_perfil(){
    var ED_log = sessionStorage.getItem('logado');
    if(ED_log == "true"){
        location.href = "Perfil.html";
    }
    else{
        location.href = "index.html";
    }
}


function GV_notificacaoevento(){
    
    let GV_lognotif = sessionStorage.getItem('logado');
    if(GV_lognotif == 'true'){
        let GV_objeventonot = GV_lerdadoseventodobancodedados();
        const favoritedEvents = GV_objeventonot.usuario.favoritos;
        const notificationElement = document.getElementById('notification');
        const GV_caixadanotificacao = document.getElementById("GV_caixanotificacao");
        const GV_caixadacaixanot = document.getElementById('GV_caixadacaixadanotificacao');
        let GV_notstr = '';

        function isHoje(dataAlvo) {
            // Obter a data atual
            const hoje = new Date();
        
            // Converter a data alvo do formato 'aaaa-mm-dd' para um objeto Date
            const [ano, mes, dia] = dataAlvo.split('-');
            const dataAlvoDate = new Date(ano, mes - 1, dia); // Meses começam do 0 em JavaScript
        
            // Comparar os componentes da data (ano, mês, dia)
            return hoje.getFullYear() === dataAlvoDate.getFullYear() &&
                hoje.getMonth() === dataAlvoDate.getMonth() &&
                hoje.getDate() === dataAlvoDate.getDate();
        }

        function faltamDoisDias(dataAlvo) {
            // Obter a data atual
            const hoje = new Date();
            
            // Converter a data alvo do formato 'aaaa-mm-dd' para um objeto Date
            const [ano, mes, dia] = dataAlvo.split('-');
            const dataAlvoDate = new Date(ano, mes - 1, dia); // Meses começam do 0 em JavaScript
        
            // Calcular a diferença em milissegundos
            const diferencaMillis = dataAlvoDate - hoje;
            
            // Converter a diferença para dias
            const diferencaDias = Math.ceil(diferencaMillis / (1000 * 60 * 60 * 24));
        
            // Verificar se a diferença é igual a 2
            return diferencaDias <= 2;
        }

        function showNotification(message) {
            GV_caixadanotificacao.innerHTML = message;
            GV_caixadacaixanot.classList.remove('hidden');
            setTimeout(() => {
                GV_caixadacaixanot.classList.add('hidden');
            }, 5000); // Hide notification after 5 seconds
        }

        // Check for notifications on page load
        favoritedEvents.forEach(event => {
            let GV_event = GV_idindexevento(event)   
            if(GV_event > 0 && GV_objeventonot.evento[GV_event].id == event)
            {
                if (faltamDoisDias(GV_objeventonot.evento[GV_event].data)) {
                    GV_notstr = GV_notstr + `<div id="notification" class="">Lembrete: ${GV_objeventonot.evento[GV_event].nome_do_evento} ocorrerá em 48 horas!</div>`
                    showNotification(GV_notstr);
                } else if (isHoje(GV_objeventonot.evento[GV_event].data)) {
                    GV_notstr = GV_notstr + `<div id="notification" class="">Lembrete: ${GV_objeventonot.evento[GV_event].nome_do_evento} é hoje!</div>`
                    
                    showNotification(GV_notstr);
                }
            } 
               
        });
    }
};

const GV_botaofecharnot = document.querySelector('.GV_caixadacaixadanotificacao > button');
GV_botaofecharnot.addEventListener('click', ()=>{
    const GV_caixadacaixanot = document.getElementById
    ('GV_caixadacaixadanotificacao');
    GV_botaomostrarnotificacao.classList.remove('hidden');
    GV_caixadacaixanot.classList.add('hidden');
})


GV_botaomostrarnotificacao.addEventListener('click', ()=>{
    GV_botaomostrarnotificacao.classList.add('hidden');
    const GV_caixadacaixanot = document.getElementById('GV_caixadacaixadanotificacao');
    GV_caixadacaixanot.classList.remove('hidden');
})


