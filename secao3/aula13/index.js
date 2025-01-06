// Aytibuição via desestruturação

/*
let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = [a, b, c];
[a, b, c] = letras; // atribuição via desestruturação

console.log(a, b, c);
*/

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

// const primeiroNumero = numeros[0]; se a gente fosse criar uma variavel por vez

/*
// ... rest (obter o resto) ou spread (espalhar)
const [um, dois, tres, ...resto] = numeros; // resto resto do array


console.log(um, dois, tres);
console.log(resto);


const [um, , tres, , cinco, , sete] = numeros; // pulamos valores atribuindo espaços vazio


console.log(um, tres, cinco, sete);
*/

//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3 ] = numeros;

console.log(numeros[1][2]);

const [,[,,seis]] = numeros;
console.log(seis);
console.log(lista3[2]);




