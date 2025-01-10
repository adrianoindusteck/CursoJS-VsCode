// Reduce - Reduzindo array

/*
Reduce é uma função utilizada principalmente para reduzir
um array em um único elemento
*/

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//const valor_inicial = [];
const valor_inicial = 0;

/*
const total = numeros.reduce((acumulador, valor, index, array) => {
    acumulador += valor;
    return acumulador;
}, valor_inicial);

const total = numeros.reduce((acumulador, valor, index, array) => acumulador += valor, valor_inicial);


// retorna apenas os números pares (filter)
const total = numeros.reduce((acumulador, valor, index, array) => {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, valor_inicial);

console.log(total);


// retorna um array com o dobro dos valores (map)
const total = numeros.reduce((acumulador, valor, index, array) => {
    acumulador.push(valor * 2);
    return acumulador;
}, valor_inicial);

console.log(total);

// soma só os pares
const total = numeros.reduce((acumulador, valor) => valor % 2 === 0 ? acumulador += valor : acumulador, valor_inicial);
console.log(total);

// soma só os impares
const total = numeros.reduce((acumulador, valor) => valor % 2 !== 0 ? acumulador += valor : acumulador, valor_inicial);
console.log(total);
*/

// Retorna a pessoa mais velha

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 105},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 64},
    { nome: 'Wallace', idade: 47},
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha);