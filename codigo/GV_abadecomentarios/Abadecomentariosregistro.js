document.addEventListener('DOMContentLoaded', (event) => {
    const registroForm = document.getElementById('registroForm');
    const registroError = document.getElementById('registroError');

    registroForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const novoUsername = novoUsernameInput.value.trim();
        const novaSenha = novaSenhaInput.value.trim();

        // Verifica se o usuário já existe no localStorage
        if (localStorage.getItem('registeredUser')) {
            registroError.textContent = 'Já existe um usuário registrado.';
            return;
        }

        // Registra o novo usuário no localStorage
        localStorage.setItem('registeredUser', JSON.stringify({ username: novoUsername, password: novaSenha }));

        // Limpa o formulário
        novoUsernameInput.value = '';
        novaSenhaInput.value = '';

        // Redireciona para a página de login
        window.location.href = 'index.html';
    });
});
