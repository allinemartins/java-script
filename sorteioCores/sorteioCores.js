// track time of execution of code
console.time("time");

console.warn("Festa das Cores");
var nomes = ['Alline', 'Amanda', 'Hellen', 'Izabela', 'Karina'];
var cores = ['Amarelo', 'Azul', 'Laranja', 'Verde', 'Vermelho'];
var sort = [], result = {};


random();

console.timeEnd("time");

//monta os resultados
function random() {
    checkNumber()
    for (let i = 0; i < nomes.length; i++) {
        result[nomes[i]] = cores[sort[i]];
    }
    console.log(result);
}

//sorteia os numeros
function checkNumber() {
    while (sort.length < nomes.length) {
        let randCor = Math.floor(Math.random() * nomes.length);
        if (!sort.some(e => e === randCor)) {
            sort.push(randCor);
        } else {
            checkNumber();
        }
    }
}