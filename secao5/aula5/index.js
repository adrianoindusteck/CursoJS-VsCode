// Map
/*
Recebemos um array do tamanho do fornecido
porém com valores alterados
map também recebe uma função de callback
map sempre vai ter o mesmo tamanho do array original

const numerosEmDobro = numeros (function(valor, indice, array) {
    return valor * 2
});


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// dobra números

const dobra = numeros.map(valor => valor * 2);
console.log(dobra);

*/


const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
];

const nomes = pessoas.map(valor => valor.nome);
const idades = pessoas.map(valor => ({ idade: valor.idade })); // parantese coloca como expressão
const comIds = pessoas.map(function (valor, indice) { 
    //valor.id = (indice + 1) * 1000;
    const newValor = { ...valor };
    newValor.id = indice;
    return newValor;
});

/*
const idades = pessoas.map(function(valor) {
    // delete valor.nome;
    return { idade: valor.idade };
});
*/
console.log(nomes);
console.log(idades);
console.log(pessoas);
console.log(comIds);