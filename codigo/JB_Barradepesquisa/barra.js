// Espera até que o DOM esteja totalmente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona a barra de pesquisa
    var searchInput = document.querySelector('.barra');
    var suggestionsWrapper = document.getElementById('caixasugestao');
    var suggestionsContainer = document.getElementById('sugestoes');
    var suggestionsTitle = document.querySelector('.titulosugestao');
    var notFoundMessage = document.querySelector('.erro');

    // Array de sugestões de tipos de locais de entretenimento
    var suggestions = [
        { category: "Balada", page: "balada.html" },
        { category: "Parque", page: "parque.html" },
        { category: "Teatro", page: "teatro.html" },
        { category: "Cinema", page: "cinema.html" },
        { category: "Bar", page: "bar.html" },
        { category: "Shows", page: "shows.html" },
        { category: "Museu", page: "museu.html" }
    ];

    // Array de outros tipos de pesquisa
    var others = [
        { category: "Perfil", page: "perfil.html" },
        { category: "Empresa", page: "empresa.html" },
        { category: "Configuraçoes", page: "config.html" }
    ];

    // Função para confirmar a pesquisa
    function confirmSearch() {
        var searchTerm = searchInput.value.toLowerCase();
        var matchedSuggestion = suggestions.find(function(suggestion) {
            return suggestion.category.toLowerCase() === searchTerm;
        });

        if (matchedSuggestion) {
            window.location.href = matchedSuggestion.page;
        } else {
            var matchedOther = others.find(function(other) {
                return other.category.toLowerCase() === searchTerm;
            });

            if (matchedOther) {
                window.location.href = matchedOther.page;
            } else {
                notFoundMessage.style.display = 'block';
            }
        }
    }

    // Evento de clique no botão de busca
    document.querySelector('.search-button').addEventListener('click', function() {
        confirmSearch();
    });

    // Evento de clique na barra de pesquisa--------------------------------------------------------------------------------ao clicar na barra de pesquisa
    searchInput.addEventListener('click', function() {
        suggestionsWrapper.style.display = 'block';
        notFoundMessage.style.display = 'none';
        displaySuggestions();
    });

    // Evento de entrada na barra de pesquisa--------------------------------------------------------------------------------cada dado inserido
    searchInput.addEventListener('input', function() {
        suggestionsWrapper.style.display = 'block';

        if (searchInput.value.trim() === '') {
            suggestionsTitle.textContent = 'Sugestões';
            notFoundMessage.style.display = 'block';
        } else {
            suggestionsTitle.textContent = '';
            notFoundMessage.style.display = 'none';
        }

        displaySuggestions();
    });

    // Evento de pressionar a tecla Enter na barra de pesquisa
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            confirmSearch();
        }
    });

    // Oculta a mensagem de erro ao clicar na barra de pesquisa
    searchInput.addEventListener('click', function() {
        notFoundMessage.style.display = 'none';
    });

    // Função para exibir sugestões correspondentes ou aleatórias
    function displaySuggestions() {
        var searchTerm = searchInput.value.toLowerCase();
        var filteredSuggestions = [];

        // Filtra sugestões de locais de entretenimento
        var filteredSuggestionLocais = suggestions.filter(function(suggestion) {
            return suggestion.category.toLowerCase().includes(searchTerm);
        });

        // Filtra outras sugestões
        var filteredOthers = others.filter(function(other) {
            return other.category.toLowerCase().includes(searchTerm);
        });

        // Concatena os resultados filtrados
        filteredSuggestions = filteredSuggestions.concat(filteredSuggestionLocais, filteredOthers);

        suggestionsContainer.innerHTML = '';

        for (var i = 0; i < Math.min(filteredSuggestions.length, 4); i++) {
            var suggestionElement = document.createElement('div');
            suggestionElement.textContent = filteredSuggestions[i].category;
            suggestionElement.classList.add('suggestion');

            var link = document.createElement('a');
            link.href = filteredSuggestions[i].page;
            link.appendChild(suggestionElement);

            suggestionsContainer.appendChild(link);
        }
    }

    // Oculta as sugestões quando clicar em qualquer lugar da página, exceto na barra de pesquisa ou nas sugestões
    document.addEventListener('click', function(event) {
        if (!searchInput.contains(event.target) && !suggestionsWrapper.contains(event.target)) {
            suggestionsWrapper.style.display = 'none';
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var searchInput = document.querySelector('.barra');
    var historyWrapper = document.getElementById('caixahistorico');
    var historyContainer = document.getElementById('historico');
    var clearHistoryButton = document.getElementById('limpar');
    var suggestionsWrapper = document.getElementById('caixasugestao');

    // Carrega o histórico de buscas salvo, se houver
    var searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

    var suggestions = [
        { category: "Balada", page: "balada.html" },
        { category: "Parque", page: "parque.html" },
        { category: "Teatro", page: "teatro.html" },
        { category: "Cinema", page: "cinema.html" },
        { category: "Bar", page: "bar.html" },
        { category: "Shows", page: "shows.html" },
        { category: "Museu", page: "museu.html" }
    ];

    // Função para atualizar a exibição do histórico de buscas
    function updateHistory() {
        historyContainer.innerHTML = ''; // Limpa o conteúdo atual do histórico

        // Adiciona cada entrada do histórico ao container
        searchHistory.forEach(function(searchTerm) {
            addToHistory(searchTerm);
        });

        // Mostra ou esconde o container de histórico conforme necessário
        if (searchHistory.length > 0 && searchInput === document.activeElement) {
            historyWrapper.style.display = 'block';
        } else {
            historyWrapper.style.display = 'none';
        }
    }

    // Função para adicionar uma busca ao histórico
    function addToHistory(searchTerm) {
        var historyEntry = document.createElement('div');
        historyEntry.textContent = searchTerm;
        historyEntry.classList.add('history-entry');
        historyContainer.appendChild(historyEntry);
    }

    // Evento de clique na barra de pesquisa para exibir o histórico
    searchInput.addEventListener('click', function() {
        // Atualiza a exibição do histórico
        updateHistory();
        // Mostra o container de sugestões
        suggestionsWrapper.style.display = 'block';
    });

    // Evento de input na barra de pesquisa
    searchInput.addEventListener('input', function(event) {
        // Oculta o histórico ao começar a digitar
        historyWrapper.style.display = 'none';

        // Verifica se o conteúdo foi apagado
        if (event.target.value.trim() === '') {
            updateHistory();
        }
    });

    // Evento de clique no botão de busca para salvar a busca no histórico
    document.querySelector('.search-button').addEventListener('click', function() {
        saveSearchToHistory();
    });

    // Evento de pressionar a tecla Enter na barra de pesquisa para salvar a busca no histórico
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            saveSearchToHistory();
        }
    });

    // Função para salvar a busca atual no histórico
    function saveSearchToHistory() {
        var searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            searchHistory.push(searchTerm);
            localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        }
    }

    // Evento de clique em uma entrada de histórico para redirecionar para a página correspondente à categoria, se aplicável
    historyContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('history-entry')) {
            var searchTerm = event.target.textContent;
            var matchedSuggestion = suggestions.find(function(suggestion) {
                return suggestion.category.toLowerCase() === searchTerm.toLowerCase();
            });

            if (matchedSuggestion) {
                window.location.href = matchedSuggestion.page;
            }
        }
    });

    // Evento de clique fora da barra de pesquisa ou do histórico para ocultar o histórico e as sugestões
    document.addEventListener('click', function(event) {
        if (!searchInput.contains(event.target) && !historyWrapper.contains(event.target)) {
            historyWrapper.style.display = 'none';
            suggestionsWrapper.style.display = 'none';
        }
    });

    // Evento de clique no botão de limpar histórico
    clearHistoryButton.addEventListener('click', function() {
        localStorage.removeItem('searchHistory');
        searchHistory = []; // Limpa o array de histórico em memória
        updateHistory(); // Atualiza a exibição do histórico
    });

    // Oculta o histórico quando a página é carregada
    historyWrapper.style.display = 'none';

    // Atualiza a exibição do histórico quando a página é carregada
    updateHistory();
});
