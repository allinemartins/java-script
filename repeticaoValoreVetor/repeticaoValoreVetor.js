function repeticaoVetor(vetor) {
    let repetidor = [];    
    vetor.forEach(element => {
        repetidor[element] = (!repetidor[element]) ? 1 : repetidor[element] + 1;
    });
    return repetidor;
}

function imprimeVetor(item, index, arr){
    if(item > 1){
        console.log("Numero " + index + ": " + item + " vezes!");
    }    
}

let vetor = [1, 1, 2, 3, 4, 3, 1];
let repetidor = repeticaoVetor(vetor);
repetidor.forEach(imprimeVetor)