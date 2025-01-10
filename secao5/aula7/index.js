// Filter + Map + Reduce
/*
=> Retorne a soma do dobro de todos os pares

*/
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//const numerosPares = numeros.filter(valor => valor % 2 === 0);
//const dobro = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2);
const soma = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador += valor,0);

//console.log(numerosPares);
//console.log(dobro);
console.log(soma);