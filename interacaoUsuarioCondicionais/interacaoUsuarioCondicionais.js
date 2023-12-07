const input = require('readline-sync');

let nome, area, areaSeguir, anos, linguages, linguagem, linguagemSeguir, arealinguagem, fullstack, tecnologias, tecnologiasEscolhidas = [];
nome = questionDoWhile(nome, String , 'Qual seu nome');
anos = questionDoWhile(anos, Number, 'Qual sua idade');
area = questionDoWhile(area, Number , 'Qual area deseja seguir Back-End ou Front-End? Responda 1 para a primeira e 2 para segunda', true);

if(area == 1){
    areaSeguir = 'Back-End';
    linguages = 'Java ou C#';    
}else if(area == 2){
    areaSeguir = 'Front-End';
    linguages = 'React ou Vue';
}

console.log(`Ola ${nome}, vi que vc tem ${anos} anos. Sua area de escolha foi ${areaSeguir}, vamos saber mais!`);

linguagem = questionDoWhile(linguagem, Number, `Qual linguagem deseja especializar ${linguages}? Responda 1 para a primeira e 2 para segunda`, true) ;

switch(Number(String(area)+String(linguagem))){
    case 11:
        linguagemSeguir = 'Java';
        break;
    case 12:
        linguagemSeguir = 'C#';
        break;
    case 21:
        linguagemSeguir = 'React';
        break;
    case 22:
        linguagemSeguir = 'Vue';
        break;
}

fullstack = questionDoWhile(fullstack, Number, `Voce quer se especializar em ${linguagemSeguir} ou se tornar um FullStack? Responda 1 para a primeira e 2 para segunda`, true) ;

if(fullstack == 2){   
    do{
        tecnologias = questionDoWhile(tecnologias, Number, `Tem mais alguma tecnologia que voce gostaria de aprender? Responda 1 para a Sim e 2 para Nao`, true) ;
        if(tecnologias !== 2 && tecnologias !== '2'){
            tecnologiasEscolhidas.push(String(input.question('Qual tecnologia? ')));
        }
    }while(tecnologias !== 2 && tecnologias !== '2')  
}

//finaliza programa
console.log(`Boas escolhas ${nome}, vc sera um(a) profissional de linha se continuar com foco e determinacao! 
Suas escolhas foram: 
1. Area: ${areaSeguir}
2. Linguagem de especializacao: ${linguagemSeguir}`);   

if(tecnologiasEscolhidas.length > 0){
    console.log('3. Outras Tecnologias:');
    for (const iterator of tecnologiasEscolhidas) {
        console.log(iterator);
    }
}
function questionDoWhile(variavel, type, pergunta, validad = false ){     
    do{
        variavel = type(input.question(`${pergunta}? `));    
        if(validad){
            validad = (variavel != 1 && variavel != 2);
        }
    }while(variavel == undefined || variavel == '' || validad);    
    
    return variavel;
}
