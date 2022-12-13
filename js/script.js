// Ativar links do Menu // header-menu
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

// Ativar Itens do Orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);

    if(elemento) {
        elemento.checked = true;
    }
    
    console.log(elemento);
}

parametros.forEach(ativarProduto);

