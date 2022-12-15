// Ativar links do Menu // header-menu ----------
const links = document.querySelectorAll("header nav li a");

// console.log("javascript" .includes("a")); // // Uma forma de verificar se é true ou false

function ativarLink(link) {
    const url = location.href;
    const href = link.href;

    if (url.includes(href)) {
        link.classList.add("ativo");
    }
}
links.forEach(ativarLink);

// Ativar Itens do Orçamento -----------
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);

    if(elemento) {
        elemento.checked = true;
    }
    
    console.log(elemento);
}

parametros.forEach(ativarProduto);

// Perguntas Frequentes ------------
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");
    console.log(ativa);

    pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de Bicicletas -----------
const galeria = document.querySelectorAll(".bicicleta-img img");
const galeriaContainer = document.querySelector(".bicicleta-img");

function trocarImagem(event) {
    const img = event.currentTarget;
    const media = matchMedia("(min-width: 1000px)").matches; //matchMedia: funciona da mesma forma que o mediaQuery.
    if (media) {
        galeriaContainer.prepend(img); //Prepend: funciona da seguinte forma, tenho uma img grande e duas pequenas. Seleciono a pequena e ela vai mudar de lugar e ir para a grande e vise versa.
    };
    console.log(img);
}

function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);

// Animação
if (window.SimpleAnime){
    new SimpleAnime();
}
