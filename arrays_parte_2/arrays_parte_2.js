// -> ARRAYs - parte 2 - Metodos de arrays

console.clear();

let arr1 = [30,12,45,34,29];
let arr2 = [];

// Fatiamento: slice
console.log(arr1.slice(0,2));
console.log(arr1.slice(2));


// Adicionando elementos: push (final) | unshift (antes)

console.log('Antes de adicionar:', arr2);

arr2.push(10,20,30);
arr2.push(40);
arr2.unshift(0);

console.log('Depois de adicionar:', arr2);

// Removendo elementos: pop (ultimo) | shift (primeiro)

console.log('Antes de remover:', arr2);

const elementoRemovido = arr2.pop();
const elementoRemovidoshift = arr2.shift();

console.log('O elemento removido com pop foi:', elementoRemovido);
console.log('O elemento removido com shift foi:', elementoRemovidoshift);

console.log('Depois de remover:', arr2);

// Concatenando arrays: concat

console.log('array 1:', arr1);
console.log('array 2:', arr2);

console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));


// Buscando elementos: indexOf | lastIndexOf 

let arr3 = [1,2,3,3,5,3];
console.log('Array 3: ', arr3);
let indexDoElemento34 = arr3.indexOf(3);

console.log("Indice do elemento: ", indexDoElemento34);

let lastIndexOfDoElemento34 = arr3.lastIndexOf(3);

console.log("Ultimo Indice do elemento: ", lastIndexOfDoElemento34);

// Descrobrindo a existencia de um elemento: includes 
console.log('Array 1: ', arr1);
console.log('Inclui o elemento: ', arr1.includes(9));

//Invertendo arrays: reverse

console.log('Array 1: ', arr1);
const arr1_invertido = arr1.reverse();
console.log('Array 1 Invertido: ', arr1_invertido);
