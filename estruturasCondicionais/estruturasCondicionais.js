// -> Estruturas Condiconais

const idade = 18;

//IF condicional mais utilizada

if(idade >= 18){
    console.log("Idade maior que 18 anos, maior de idade");
}else{
    console.log("Idade menor que 18 anos, menor de idade");
}

console.clear(); //limpando as saidas anteriores

let media = 10;

if(media >= 7){
    console.log("Aprovado");
}else if(media < 7 && media >= 5){
    console.log("Recuperacao");
}else{
    console.log("Reprovado");
}