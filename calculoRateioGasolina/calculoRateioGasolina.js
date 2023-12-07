// -> Calculo rateio gasolina
console.clear();
const input = require('readline-sync');

//valor em porcentagem para aumentar o gasto realizado 
const pesoOutrosGastos = 1.10;
let km = Number(input.question('Qual a km rodada? '));
let kmPorLitro = Number(input.question('Quantos km seu carro faz por litro? '));
let precoCombustivel = Number(input.question('Valor do preco do combustivel a ser calculado? '));
let outrosGastos = input.question('Ira considerar outros gastos  (S para Sim e N para Nao)? ');
let pessoas = Number(input.question('Quantas pessoas devem entrar no calculo? '));

let litros = calcularLitrosGastos(km, kmPorLitro);
console.log('Kms Rodados:', km);
console.log('Km por Litro:', kmPorLitro);
console.log('Litros Gastos:', litros);

let gastos = calculoGastos(litros, precoCombustivel, outrosGastos);
console.log('Preco Combustivel:', precoCombustivel);
console.log('Colocar outros Gastos na Conta?', outrosGastos);
console.log('Valor Gastos:', gastos);

let rateio = calculoRateio(gastos, pessoas);
console.log('Valor por Pessoa:', rateio);

function calcularLitrosGastos(km, kmPorLitro){
    return (Number)((km/kmPorLitro).toFixed(2));
}

function calculoGastos(litros, precoCombustivel, outrosGastos){
    let gastos = (litros * precoCombustivel);
    if(outrosGastos === 'S'){
        gastos = gastos * pesoOutrosGastos;
    }      
    return (Number(gastos.toFixed(2)));
}

function calculoRateio(gastos, pessoas){
    return (Number((gastos/pessoas).toFixed(2)));
}