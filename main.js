window.onload = function() {
    const header = document.querySelector('header');
    const primeiroArticle = document.querySelector('.primeiro-article');
    const botaoVoltar = document.querySelector('.botao-voltar');
    const distanciaDesejadaVertical = 10; // distância do topo do article

    function reposicionarBotaoVoltar() {
        if (window.innerWidth <= 768 && primeiroArticle && botaoVoltar) {
            const articleTop = primeiroArticle.offsetTop;
            botaoVoltar.style.top = (articleTop + distanciaDesejadaVertical) + 'px';
        } else if (botaoVoltar) {
            // restaurar o comportamento para desktop (se necessário)
            const headerHeight = header ? header.offsetHeight : 0;
            botaoVoltar.style.top = (headerHeight + 20) + 'px'; // manter distância do header no desktop
        }
    }

    reposicionarBotaoVoltar(); //

    // ouvinte de resize para ajustar a posição em mudanças de tela
    window.addEventListener('resize', reposicionarBotaoVoltar);
};