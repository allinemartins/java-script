// -> Calculo tabuada
const input = require('readline-sync');
let numero = Number(input.question('Inform um numero: '));

tabuada(numero);

function tabuada(numero){  
    console.log("*********** TABUADA ***********")  
    for(let i=1; i<=10; i++) {   
       let valor = i*numero;    
       console.log(`[${i} * ${numero}] = ${valor}`);
    } 
    console.log("*******************************")     
}

