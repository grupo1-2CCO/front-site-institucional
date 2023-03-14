

function abrirMenu(){
    const menu = document.querySelector('.menu');
    menu.classList.add('open');
}

function fecharMenu(){
    const menu = document.querySelector('.menu');
    menu.classList.remove('open');
}

function carregaPagina(){
    const listaLinks = document.querySelector('.menu ul');

    const links = listaLinks.querySelectorAll('li a');

    const linhaRodape = document.querySelectorAll('#linhaRodape');

    links.forEach(link => {
        const hr = document.createElement('hr');
        link.insertAdjacentElement('afterend', hr);
    });

    linhaRodape.forEach(linha => {
        const hr = document.createElement('hr');
        linha.insertAdjacentElement('afterend', hr);
    });

}