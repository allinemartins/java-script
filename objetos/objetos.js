// > OBJETOS objeto e definido por chave e por valor 

// Como criar um objeto no JavaScript?

let pessoa = {
    nome: "Alline",
    idade: 31
}

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa['nome']); // forma alternativa -- quando chave e mto complexa
console.log(pessoa.idade);
// Como adicionar um par chave-valor?
pessoa.altura = 1.77;
console.log(pessoa);
// Como remover um par chave-valor?
delete pessoa.altura;
console.log(pessoa);
// Como percorrer
for(let chave in pessoa) {
    console.log(`${chave}:`, pessoa[chave]);
}