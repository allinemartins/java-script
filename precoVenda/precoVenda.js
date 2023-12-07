function precoVenda(preco) {
    if (typeof (preco) !== 'number') {
        return "Valor de entrada do preço não aceito";
    }

    let lucro = (preco < 30) ? 0.45 : 0.30;
    return (preco * (1 + lucro)).toFixed(2);
}

console.log(precoVenda(35, 66));
console.log(precoVenda('teste'));
console.log(precoVenda(50));
console.log(precoVenda(50.55));