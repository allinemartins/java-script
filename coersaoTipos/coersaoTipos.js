// Andrehlb - Resumo Variáveis e Operadores parte 5.5
// das aulas de JS da Let´s Code
//Coersão de tipos or Conversao de Tipos

console.log('');
console.log('Coersão de tipos ou conversão de tipos: explícita (feita pelo coder) e implícita (feito pelo JS)');
console.log('');

console.log('1° coersão explícita (CE, manual)');
const numero3 = 10;

console.log("O número é: ", numero3, typeof numero3);

console.log('');
console.log('Se quiser converter o número em texto? Aqui ocorre o procedimento de CE');
const numeroFormatoString = String(numero3);
console.log('O número convertido em string é: ', numeroFormatoString, ' e o tipo é:', typeof numeroFormatoString);

console.log('Tenho texto (string de números) que quero converter para número, usa-se o Number: ');
//o nome da variável é Number se coloca o texto que se quer converter em número 
console.log(Number('1234232'));

console.log('');
console.log('Outras funções além do Number: parseInt() (converte para número inteiro, mesmo que seja decimal) e o parseFloat');
console.log('usando parseFloat ', parseFloat('2345.67'));
console.log('usando parseInt ', parseInt('2345.67'));
console.log('usando o Number ', Number('2345.67'));
//existem funções na biblioteca Math que pode ajudar a truncar (retirar o decimal e tornar inteiro) o número
console.log('Usando boolean, se for número é verdadeiro imprime true: ', Boolean(2345.67));
console.log('Usando boolean, se número é igual a zero, imprime false: ', Boolean(0));

console.log('');
console.log('Coersão inplícita (CI, Automática, feita pelo JS), são diversos cenários possíveis');
console.log('');
console.log('Fazendo 10 + 1 = ', 10 + 1);
console.log('Somando com uma string: 10 + "1" = ', 10 + '1');
console.log('JS converte tudo em texto e faz a junção, i.é., a concatenação, na sequência que está, por isso o resultado de 10 + "1" é', 10 + '1');

console.log('');
console.log('Fazendo 10 - 1 = ', 10 - 1);
console.log('Subtraindo com uma string: 10 - "1" = ', 10 + '1');
console.log('JS não faz a concatenação, entende que é número e faz a conversão, por isso o resultado de 10 + "1" é', 10 - '1');
console.log('');
console.log('Fazendo 10 x 3 = ', 10 * 1);
console.log('Multiplicação com uma string: 10 x "3" = ', 10 * '3');
console.log('JS não faz a concatenação, entende que é número e faz a conversão, por isso o resultado de 10 x "3" é', 10 * '3');
console.log('');
console.log('Fazendo 10 / 5 = ', 10 / 5);
console.log('Subtraindo com uma string: 10 / "5" = ', 10 / '5');
console.log('JS não faz a concatenação, entende que é número e faz a conversão, por isso o resultado de 10 / "5" é', 10 / '5');

console.log('');
console.log('Fazendo 10 - "x" = ', 10 - 'x');
console.log('Subtraindo com uma string: 10 - "x" = ', 10 - 'x');
console.log('JS não faz a concatenação, entende que é NOT A NUMBER = NAN, por isso o resultado de 10 - "x" é', 10 - 'x');
console.log('');
console.log('Fazendo 10 x "x" = ', 10 * 'x');
console.log('Multiplicando com uma string: 10 x "x" = ', 10 * 'x');
console.log('JS não faz a concatenação, entende que é NOT A NUMBER = NAN, por isso o resultado de 10 x "x" é', 10 * 'x');
console.log('');
console.log('Fazendo 10 / "x" = ', 10 / 'x');
console.log('Dividindo com uma string: 10 / "x" = ', 10 / 'x');
console.log('JS não faz a concatenação, entende que é NOT A NUMBER = NAN, por isso o resultado de 10 / "x" é', 10 / 'x');

console.log('');
console.log('Fazendo 10 + "x" = ', 10 + 'x');
console.log('Subtraindo com uma string: 10 + "x" = ', 10 + 'x');
console.log('JS faz a concatenação, por isso o resultado de 10 + "x" é', 10 + 'x');

console.log('Exe1: Qual a saída desse código? let n = 1 + "1", sendo n recebe n - 1');

let n = 1 + "1";
n = n -1;
console.log(n, "houve a concatenação 11 e a subtração por 1");

console.log('');
console.log('Exe2: Qual a saída desse código? 2 + 3 + 4 + "5", será de ', 2 + 3 + 4 + "5");
console.log('houve a concatenação do resultado da soma = 9 com 5');

console.log('');
console.log('Exe3: Qual a saída desse código? "5" + 2 + 3 + 4, será ', "5" + 2 + 3 + 4);
console.log('houve a concatenação (porque é soma) da string 5 com os demais números');

console.log('');
console.log('Exe4: Qual a saída desse código? "10" + "4" + "3" - 2 + "5" será', "10" + "4" + "3" - 2 + "5");
console.log('houve a concatenação de 1043 subtraindo 2 = 1041 e concatenando com 5');

console.log('');
console.log('Exe4: Qual a saída desse código? "10" - "4" + "3" - 2 + "5" será ', "10" - "4" + "3" - 2 + "5");
console.log('houve a subtração das strings "10" e "4" (pois o operador é menos, JS converte as strings em número) e a concatenação do resultado = 6 com 3 e a subtração de 2 e a concatenação deste resultado com 5, porque o operador é uma soma');

console.log('');
console.log('Espero que ajude a refrescar a memória das aulas de JS da ADA_Tech. É para quem está na dúvida... ');