// Andrehlb - Resumo Variáveis e Operadores parte 2 
// das aulas de JS da Let´s Code
//operadores aritméticos - math
//boas práticas para variáveis
//camecase
console.log('');
console.log('2. Operadores aritméticos e Boas Práticas');
console.log('');
console.log('adição + | subtração - | multiplicação * | divisão / | exponenciação ** | Resto da divisão % ');
console.log('');
//let numero1 = 20; com camel case:
let primeiroNumero = 20;

//let numero2 = 2;
let segundoNumero = 2;

console.log('Soma = ', primeiroNumero + segundoNumero);

//ou 

const soma = primeiroNumero + segundoNumero;
console.log('Soma = ', soma);

//ou ainda 

console.log('Subtração = ', primeiroNumero - segundoNumero);
console.log('Multiplicação = ', primeiroNumero * segundoNumero);
console.log('Divisão = ', primeiroNumero / segundoNumero);
console.log('Exponenciação = ', primeiroNumero ** segundoNumero);
console.log('Resto = ', primeiroNumero % segundoNumero);

//precedência de operadores

console.log(3 + 7 * 3);
console.log((3 + 7) * 3);
console.log('A média de 10, 7, 8 é: ', (10 + 7 + 8)/3);

//Biblioteca Math

console.log('O número Pi é:', Math.PI);
//funções
console.log('A raiz quadrada de 16 é: ', Math.sqrt(16));

//documentação pesquisa javascript MDN | pesquisa javascript MDN Math