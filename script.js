// mobile-navbar.js 
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                      index / 7 + 0.3
                  }s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li a",
);
mobileNavbar.init();

function formatarTelefone(input) {
    const cursorPosition = input.selectionStart;
    const valorAnterior = input.value;
    const numeroLimpo = input.value.replace(/\D/g, '');
    let formattedNumber = '';

    if (numeroLimpo.length > 0) {
        formattedNumber += '(' + numeroLimpo.substring(0, 2);
    }

    if (numeroLimpo.length > 2) {
        formattedNumber += ') ' + numeroLimpo.substring(2, 7);
    }

    if (numeroLimpo.length > 7) {
        formattedNumber += '-' + numeroLimpo.substring(7, 11);
    }

    input.value = formattedNumber;

    if (valorAnterior.length <= formattedNumber.length) {
        input.selectionStart = cursorPosition + (formattedNumber.length - valorAnterior.length);
        input.selectionEnd = cursorPosition + (formattedNumber.length - valorAnterior.length);
    } else {
        input.selectionStart = cursorPosition - (valorAnterior.length - formattedNumber.length);
        input.selectionEnd = cursorPosition - (valorAnterior.length - formattedNumber.length);
    }
}

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