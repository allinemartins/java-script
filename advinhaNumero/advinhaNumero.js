const input = require('readline-sync');
let randNumero, numeroInformado, condition = false;

randNumero = Math.floor(Math.random() * 10);

for(let i=0; i<3; i++){
    if(!verificaNumber()){
        numeroInformado = Number(input.question('Qual valor deseja chutar: '));
        condition = verificaNumber();
    }
}

function verificaNumber(){
    return numeroInformado === randNumero;
}

if(condition){
    console.log(`Parabens vc acertou, o numero sorteado foi: ${randNumero}!`);
}else{
    console.log(`Pena não foi dessa vez, o numero sorteado foi: ${randNumero}!`);
}