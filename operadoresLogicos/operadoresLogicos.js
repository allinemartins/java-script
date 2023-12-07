
// Andrehlb - Resumo Variáveis e Operadores parte 4
// das aulas de JS da Let´s Code
//Conjunções lógicas
console.log(''); //console.log(''); para pular linha
console.log('Conjunções lógicas: AND && | NOT ! | OR ||');
console.log('');
console.log('Exemplo: Se eu tiver mais de 18 anos e ter uma CNH, posso dirigir?');
console.log('');
console.log('"e" é uma conjunção, criando duas variáveis:');
console.log('');
let idadeCNH = 26;
let tenhoCNH = true;

const possoDirigir = idadeCNH >= 18 && tenhoCNH === true;

console.log('');
console.log('Posso dirigir? (maior que 18 e (AND &&) ter CNH)', possoDirigir);

console.log('');
console.log('Uso do "OR ||" exemplo: Posso votar ou não se eu tiver menos de 18 ou mais do que 70 anos');

let idadeVoto = 40;
const votoFacultativo = idadeVoto < 18 || idadeVoto > 70;

console.log('Tenho 40 anos, o voto é facultativo é ', votoFacultativo, "(falso), apenas será true (verdadeiro) se eu tiver menos de 18 e mais de 70 anos");

console.log('');
let idade2Voto = 16;
const voto2Facultativo = idade2Voto < 18 || idade > 70;
console.log('Tenho 16 anos, então para mim o voto é facultativo porque eu tenho menos de 18 e mais de 70 anos', voto2Facultativo);

console.log('');
const gostoDeCodar = false;
console.log('Usando o NOT ! que colocado no iniício da variável inverte o boleano, exemplo: gosto de Codar = false:', !gostoDeCodar);