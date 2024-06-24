// Função para exibir a modal quando o botão é clicado
function exibirModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
    exibirOpcoes(); 
}

// Função para fechar a modal e limpar seu conteúdo
function fecharModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
    var modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = "";
}

// Função para exibir as opções padrão no modal (enviar email e redes sociais)
function exibirOpcoes() {
    var modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = `
        <button class="btn-fechar" type="button" onclick="fecharModal()">&times;</button>
        <h2>Fale com o produtor</h2>
        <button onclick="enviarEmail()">Email</button>
        <button onclick="redesSociais()">Redes Sociais</button>
    `;
}

// Função para exibir o formulário de email no modal
function enviarEmail() {
    var modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = `
        <button class="btn-fechar" type="button" onclick="fecharModal()">&times;</button>
        <h2 class="">Fale com o produtor</h2>
        <form id="email-form" class="email-formulario">
            <label for="nome">Nome <span class="ast">*</span></label><br>
            <input type="text" id="nome" name="nome"><br>
            <label for="email">Email <span class="ast">*</span></label><br>
            <input type="email" id="email" name="email"><br>
            <label for="assunto">Assunto <span class="ast">*</span></label><br>
            <input type="text" id="assunto" name="assunto"><br>
            <label for="mensagem">Mensagem <span class="ast">*</span></label><br>
            <textarea id="mensagem" name="mensagem"></textarea><br><br>
            <div class="btns">
                <button class="btn-cancelar" type="button" onclick="fecharModal()">Cancelar</button>
                <button class="btn-enviar" type="button" onclick="enviarFormulario()">Enviar</button>
            </div>
        </form>
    `;
}

// Função para enviar o formulário de email
function enviarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;

    if (nome && email && assunto && mensagem) {
        alert("Mensagem de email enviada!");
        fecharModal();
    } else {
        alert("Por favor, preencha todos os campos do formulário.");
    }
}

// Função para exibir os links de redes sociais no modal
function exibirRedesSociais() {
    var modalContent = document.getElementById("modal-content");
    var linkFacebook = localStorage.getItem("linkFacebook");
    var linkInstagram = localStorage.getItem("linkInstagram");

    var redesSociaisHTML = `
        <span class="fechar" onclick="fecharModal()">&times;</span>
        <h2>Redes Sociais</h2>
        <ul>
    `;

    if (linkFacebook) {
        redesSociaisHTML += `<li><a href="${linkFacebook}" target="_blank">Facebook</a></li>`;
    }

    if (linkInstagram) {
        redesSociaisHTML += `<li><a href="${linkInstagram}" target="_blank">Instagram</a></li>`;
    }

    redesSociaisHTML += `</ul>`;
    modalContent.innerHTML = redesSociaisHTML;
}

// Função para compartilhar em redes sociais
function redesSociais() { 
    exibirRedesSociais(); // Exibe os links das redes sociais no modal
}

// Evento para fechar a modal se o usuário clicar fora dela
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        fecharModal();
    }
}

/* 
// Função para salvar os links no LocalStorage
function salvarLinksRedesSociais() {
    var linkFacebook = document.getElementById("linkFacebook").value;
    var linkInstagram = document.getElementById("linkInstagram").value;

    // Salva os links no LocalStorage
    localStorage.setItem("linkFacebook", linkFacebook);
    localStorage.setItem("linkInstagram", linkInstagram);

    alert("Links das redes sociais salvos!");
}
*/
