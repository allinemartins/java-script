// -> Lacos Condicionais --- Ideia de  repeticao (loop)
console.clear();
const input = require('readline-sync')

//Acumulador

let acumulador = 0;

// laco repeticao / numericos (FOR)
let nota, soma = 0, countNotas = 0;
for(let i = 1; i <= 3; i++){
    //template string, com crase no inicio e no final com dolar e entre {}
    nota = Number(input.question(`Informe a nota ${i} = `));
    soma += nota;
    countNotas++;
}
console.log("Soma = ", soma);
console.log("Qtd Notas = ", countNotas);
console.log("Media = ", (soma/countNotas).toFixed(2));