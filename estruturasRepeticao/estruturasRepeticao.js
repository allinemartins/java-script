// -> Lacos Condicionais --- Ideia de  repeticao (loop)
console.clear();
const input = require('readline-sync')

const numero_sorteado = 5;
let numero = Number(input.question('Qual numero vc escolhe?'));
console.log(numero, typeof numero);

while(numero !== numero_sorteado){
    console.log("Vc errou o numero");
    numero = Number(input.question('Qual numero vc escolhe?'));   
}

console.log("Vc acertou o numero");