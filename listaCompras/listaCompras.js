// trabalhar com opcao de remover o item da lista
// verificar se a lista esta vazia
// exibir msg apos exclusao, mas continuar colocando itens na mesma

const input = require('readline-sync');

let categorias = [];
let listaCompras = {};
let conditionCategoria, categoria, conditionItem, item, itemCategoria = 0;

do{
    conditionCategoria = questionDoWhile(conditionCategoria, Number, `Deseja inserir categorias na lista? Responda 1 para Sim e 2 para Nao`, true) ;
    if(conditionCategoria !== 2 && conditionCategoria !== '2'){
        categoria = String(input.question('Qual categoria? '));
        categorias.push(categoria);
    }
}while(conditionCategoria !== 2 && conditionCategoria !== '2')  

if(categorias.length == 0){
    categorias.push('Geral');
}

do{
    conditionItem = questionDoWhile(conditionItem, Number, `Deseja inserir item na lista? Responda 1 para Sim e 2 para Nao`, true) ;
    if(conditionItem !== 2 && conditionItem !== '2'){
        item = String(input.question('Qual item? '));
        
        if(categorias.length > 1){
            console.log('Classifique a categoria do item, de acordo com as opcoes abaixo: ');
            
            for(let chave in categorias) {
                console.log(`${chave}:`, categorias[chave]);
            }
        
            do{
                itemCategoria = Number(input.question('Qual categoria? '));            
            }while(categorias[itemCategoria] === '' || categorias[itemCategoria] === undefined);        
        }
        
        if(!listaCompras[categorias[itemCategoria]]){
            listaCompras[categorias[itemCategoria]] = [];
        }        
        listaCompras[categorias[itemCategoria]].push(item);
        
    }
}while(conditionItem !== 2 && conditionItem !== '2')  

imprimeListaCompras();

function imprimeListaCompras(){    
    console.log('========= Lista de Compras =========');    
    for(let chave in listaCompras) {
        console.log('');
        console.log(`--------- ${chave} ---------`);
        for(let itemVetor of listaCompras[chave]) {
            console.log(`${itemVetor}`);
        }       
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
