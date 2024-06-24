document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.getElementById('loginForm');
    const commentForm = document.getElementById('commentForm');
    const commentInput = document.getElementById('commentInput');
    const commentsList = document.getElementById('commentsList');
    const loginSection = document.getElementById('loginSection');
    const commentSection = document.getElementById('commentSection');
    const usernameDisplay = document.getElementById('usernameDisplay');
    const loginError = document.getElementById('loginError');
    const logoutButton = document.getElementById('logoutButton');

    // Verificar se o usuário está logado ao carregar a página
    verificarSessao();

    // Função para verificar se o usuário está logado
    function verificarSessao() {
        const loggedInUser = sessionStorage.getItem('loggedInUser');
        if (loggedInUser) {
            exibirComentarios();
        } else {
            exibirLogin();
        }
    }

    // Função para exibir a seção de login
    function exibirLogin() {
        loginSection.style.display = 'block';
        commentSection.style.display = 'none';
    }

    // Função para exibir a seção de comentários
    function exibirComentarios() {
        loginSection.style.display = 'none';
        commentSection.style.display = 'block';
        usernameDisplay.textContent = sessionStorage.getItem('loggedInUser');
        carregarComentarios();
    }

    // Evento de login
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const loginValido = fazerLogin(username, password);
        if (loginValido) {
            exibirComentarios();
        } else {
            loginError.textContent = 'Usuário ou senha incorretos.';
        }
    });

    // Evento de logout
    logoutButton.addEventListener('click', function(e) {
        e.preventDefault();
        fazerLogout();
        exibirLogin();
    });

    // Evento de adicionar comentário
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newComment = commentInput.value.trim();
        if (newComment) {
            adicionarComentario(newComment);
            commentInput.value = '';
        }
    });

    // Função para adicionar comentário à lista
    function adicionarComentario(comment) {
        const commentItem = document.createElement('li');
        commentItem.innerHTML = `<strong>${sessionStorage.getItem('loggedInUser')}</strong>: ${comment}`;
        commentsList.appendChild(commentItem);
    }

    // Função para realizar o login
    function fazerLogin(username, password) {
        // Simulação de autenticação
        const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
        if (registeredUser && username === registeredUser.username && password === registeredUser.password) {
            sessionStorage.setItem('loggedInUser', username);
            return true;
        } else {
            return false;
        }
    }

    // Função para fazer logout
    function fazerLogout() {
        sessionStorage.removeItem('loggedInUser');
    }

    // Função para carregar os comentários (simulação inicial)
    function carregarComentarios() {
        // Simulação de carregamento inicial de comentários
        // Aqui você pode implementar a lógica para carregar os comentários do backend ou localStorage, se necessário.
        // Neste exemplo, não carregamos nenhum comentário inicialmente.
    }
});
