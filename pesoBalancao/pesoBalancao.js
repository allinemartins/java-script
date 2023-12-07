/*
Exercicio proposto => 

Você tem 9 pesos e sabe que 1 deles é mais pesado que os demais, você precisa descobrir qual é. 
Para isso você alugou uma balança de pratos e tem direito de utilizá-la 3 vezes. 
Desenvolva um algoritmo que execute a sequência de passos que deve ser realizada.


Sequencia sugerida por colegas => 

1 - Separa 1 peso e pesa-se a quantidade restante de pesos (que agora é par) em dois grupos iguais, se a pesagem for igual, 
    o peso separado no início é o mais pesado e usou-se a balança só uma vez.

2 - Se a pesagem 1 retornou pesos distintos, então junta-se o grupo par de pesos que pesou mais com o peso separado 
    no início e embaralha; repete a pesagem 1 e usou-se a balança apenas 2 vezes.

3 - Por fim, se a pesagem 2 retornou pesos distintos, então só temos 2 últimos pesos para verificar, 
    usando a balança 3 vezes.

Abaixo aplicao em JS do que foi sugerido acima

*/
//Partir do principio que somente um pese diferente e é o maior peso
console.clear();
let pesos = [55,90,55,55,55,55,55,55,55];
let usoBalanca = 0;

//escolhe um valor aleatorio
let indiceEscolhido = Math.floor(Math.random()*pesos.length);

//retira do pesos o que foi escolhido
let arrayFilter = pesos.slice(0, indiceEscolhido).concat(pesos.slice(indiceEscolhido+1, pesos.length));

//particiona o vetor
let partionamento = sliceVetorPorDois(arrayFilter);

//usa a balanca primeira vez
balanca(partionamento[0], partionamento[1]);

//function para imprimir resposta
function imprimeResposta(maiorPeso = pesos[indiceEscolhido]){
    console.log('Pesos:',pesos);
    console.log('Maior Peso:', maiorPeso);
    console.log('Uso da Balança:', usoBalanca);
}

//function para particionar o valor 
function sliceVetorPorDois(vetor){
    //fatia o vetor em duas partes 
    let array1 = vetor.slice(0,(vetor.length/2));
    let array2 = vetor.slice((vetor.length/2), vetor.length);

    return [array1, array2];
}

//function balanca
function balanca(vetor1, vetor2) {
    let vetorReferencia, partion;
    usoBalanca += 1;
    //chama funcao para obter peso de cada lado
    let peso1 = peso_vetor(vetor1);
    let peso2 = peso_vetor(vetor2);

    if(peso1 === peso2) {
        imprimeResposta();
    }else{
        //verifica qual particao de vetor e maior e atribui para uma referencia para ser partionada novamente
        if(peso1 > peso2){            
            vetorReferencia = vetor1;
        }else{           
            vetorReferencia = vetor2;
        } 
        //particiona o vetor referencia
        partion = sliceVetorPorDois(vetorReferencia);
        /*conditions para verificar se chegou no ultimo nivel de particao, caso nao use a balanca novamente, 
        *caso sim imprime resultado
        */
        if(partion[0].length > 0 && partion[1].length > 0 ){
            balanca(partion[0], partion[1]);
        }else if(partion[0].length == 1){                        
            imprimeResposta(partion[0][0]); 
        }else if(partion[1].length == 1){            
            imprimeResposta(partion[1][0]); 
        }           
    }    
}

//function para soma peso do vetor
function peso_vetor(vetor) {
    let soma = 0;
    for(let elemento of vetor){
        soma += elemento;
    }
    return soma;
}