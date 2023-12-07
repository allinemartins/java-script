troca(50, 40);

function troca(x, y){    
    let A = x;    
    let B = y;
    //torna primeiro valor a soma dos dois    
    A = A + B;        
    //segundo valor recebe a soma menos o segundo o valor, tendo assim o primeiro, realizando a primeira troca
    B = A - B;
    //primeiro valor recebe a soma menos o segundo o valor atualizado, tem-se o primeiro valor, e realiza a segunda troca
    A = A - B;    
    console.log(`Valores inicais A = ${x} e B = ${y}. Trocando: A = ${A}, B = ${B}`);
}