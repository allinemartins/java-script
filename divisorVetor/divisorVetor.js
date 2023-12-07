function divVetor(vetor) {
    let positivo = [];
    let negativo = [];
    vetor.forEach(element => {
        element>0 && positivo.push(element);
        element<0 && negativo.push(element);
    });
    return {"vetor": vetor, "positivos": positivo, "negativos": negativo};
}

let vetor = [1, -5, 0, 60, -45, -6, 30, 'teste'];
let vetores = divVetor(vetor);
console.log(vetores);