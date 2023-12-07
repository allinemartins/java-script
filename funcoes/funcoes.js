// FUNCOES

//definicao de funcao
function saudacao() {
    console.log('Ola, seja bem-vindo ao nosso curso básico de JavaScript!');
}

saudacao();

console.clear();

//Como enviar parametros para funcao, podendo colocar valor default
function saudacao(nome = 'Aluno', curso = 'JavaScript') {
    console.log(`Ola, ${nome}! Seja bem-vindo ao nosso curso básico de ${curso}!`);
}

saudacao();
saudacao('Alline');

console.clear();

function soma(numero1, numero2) {
    console.log(`Soma de ${numero1} e ${numero2} é igual `, numero1 + numero2);
}

soma(15,20)

//funcao que retorna valor
console.clear();

function soma(numero1, numero2) {
    //utilizando a return
    return numero1 + numero2;
    console.log('teste'); //codigo nao chega, nao roda
}

let somaValores = soma(15,20);
console.log(`Soma é igual a`, somaValores);