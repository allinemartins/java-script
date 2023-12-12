function tocaSom(idElement) {
    const elemento = document.querySelector(`${idElement}`);
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

function setOnkeydown(elemento){
    elemento.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            elemento.classList.add('ativa');
        }
    }
}

function setOnkeyup(elemento){
    elemento.onkeyup = function () {
        elemento.classList.remove('ativa');
    }
}

function setOnclick(elemento, idElement){
    elemento.onclick = function() {
        tocaSom(idElement);
    };
}

// Selecionar todos os elementos com a classe 'tecla'
const elementosTecla = document.querySelectorAll('.tecla');
// Iterar sobre cada elemento e acessar a segunda classe
elementosTecla.forEach(elemento => {
    // Obter todas as classes do elemento como uma lista
    const classes = elemento.classList;
    // Acessar a segunda classe (índice 1)
    const segundaClasse = classes[1];
    const idElement = `#som_${segundaClasse}`;
    // Adicionar onclick por cada elemento, chamando a função tocaSom com o ID como argumento 
    //(esta função é anônima)
    setOnclick(elemento, idElement);
    //add events por tecla 
    setOnkeydown(elemento);
    setOnkeyup(elemento);
});
