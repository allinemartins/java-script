const input = require('readline-sync');

let nome, anos, linguagem, estudo;

nome = questionDoWhile(nome, String , 'Qual seu nome');
anos = questionDoWhile(anos, Number, 'Qual sua idade');
linguagem = questionDoWhile(linguagem, String, 'Qual linguagem de programacao voce esta estudando');

console.log(`Olá ${nome}, você tem ${anos} anos e já está aprendendo ${linguagem}!`);

estudo = questionDoWhile(estudo, Number, `Voce gosta de estudar ${linguagem}? Responda com o numero 1 para SIM ou 2 para NAO.`);

if(estudo == 1){
    console.log('Muito bom! Continue estudando e voce tera muito sucesso.');
}else{
    console.log('Ahh que pena... Ja tentou aprender outras linguagens?');
}

function questionDoWhile(variavel, type, pergunta){
    do{
        variavel = type(input.question(`${pergunta}? `));    
    }while(variavel == undefined || variavel == '');    
    
    return variavel;
}


