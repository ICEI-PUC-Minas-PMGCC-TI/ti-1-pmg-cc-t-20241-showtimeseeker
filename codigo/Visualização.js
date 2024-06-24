document.addEventListener('DOMContentLoaded', (event) => {
    // Obter o contador do localStorage
    let visitCount = localStorage.getItem('visitCount');

    // Se não houver valor salvo, inicialize com 0
    if (visitCount === null) {
        visitCount = 0;
    } else {
        // Converter o valor salvo para número
        visitCount = parseInt(visitCount, 10);
    }

    // Incrementar o contador
    visitCount++;

    // Atualizar o contador no localStorage
    localStorage.setItem('visitCount', visitCount);

    // Exibir o contador atualizado na página
    document.getElementById('visit-count').textContent = visitCount;
});
