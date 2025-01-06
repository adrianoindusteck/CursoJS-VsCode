/*
Primitivos (imutáveis) - String, number, boolean, 
undefined, null (bigint, symbol) - Valor


let nome = 'Luiz';
nome = 'Otávio';
console.log(nome);

let nome = 'Luiz';
nome[0] = 'R';
console.log(nome[0], nome);

Referência (mutável) - Array, object, function

let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);

valores primitivos são copiados quando usamos operadores de atribuição



let a = [1, 2, 3];
let b = [...a];
let c = b;
console.log(a, b);
a.push(4);
console.log(a, b);
b[2] = 5;
console.log(a, b);
b.pop();
console.log(a, b);
console.log(a, b, c);
a.push('Luiz');
console.log(a, b, c);

*/

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

const b = a;
const c = {...a}; // fazer um spread para não apontarem para o mesmo lugar de memória

console.log(a, b);
a.nome = 'João';
console.log(a, b);
console.log(a, b, c);



