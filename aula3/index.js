// Retorno da função - return
/*
Retorna um valor
a função termina
função que não retorna nada tem valor undefined porém pode ter uma aplicação útil


*/

function soma(a, b) {
    return a + b;
}

console.log(soma(2, 5));

function soma2(a, b) {
    console.log(a + b);
}

let x = soma2(5, 2);
console.log(x);

function criaPessoa(nome, sobrenome) {
    return { nome: nome, sobrenome: sobrenome }
}

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = { 
    nome: 'João',
    sobrenome: 'Oliveira'
};

console.log(p1);
console.log(p2);
console.log(typeof p1);
console.log(typeof p2);

// retornando a função sem executar
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }

    return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo);
console.log(olaMundo('mundo! '));

const fala = falaFrase('Olá!');
const resto = fala('mundo!');
console.log(resto);

function duplica(n) {
    return n * 2;
}

function triplica(n) {
    return n * 3;
}

function quadriplica(n) {
    return n * 4;
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

function criaMultiplicador(multiplicador) {
    // multiplicador
    return function (n) {
        return n * multiplicador;
    };
}

const duplica1 = criaMultiplicador(2);
const triplica1 = criaMultiplicador(3);
const quadriplica1 = criaMultiplicador(4);

console.log(duplica1(2));
console.log(triplica(2));
console.log(quadriplica(2));




