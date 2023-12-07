// -> ARRAYs
console.clear();
// - Como criar um array?

let arr = ['teste', 'alline', 20, 10, true, 1.78] ;

console.log(arr);

// - Como acessar os elementos do array
console.log('Primeiro elemento:', arr[0]);
console.log('Segundo elemento:', arr[1]);
console.log('Terceiro elemento:', arr[2]);
console.log('Quarto elemento:', arr[3]);
console.log('Quinto elemento:', arr[4]);
console.log('Sexto elemento:', arr[5]);

// - Como obter o tamanho do array 
console.log('Tamanho do array:', arr.length);

// - Percorrendo arrays
for(let i = 0; i < arr.length; i++){
    console.log(`Elemento ${i+1}: `, arr[i]);
}

//for of percorrendo cada elemento do array
for(let elemento of arr){
    console.log(`Elemento: `, elemento);
}

//for in percorrendo os index do array
for (let indice in arr){
    //console.log(`Index: `, indice);
    console.log(`Index ${indice} : `, arr[indice]);
}