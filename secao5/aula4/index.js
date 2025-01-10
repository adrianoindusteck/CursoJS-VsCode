// Filtrando o array

// Filter, map, reduce

/* Funções mais importantes para arrays 
Filter -> Sempre retornar um array, com a mesma quantidade de elementos
ou menos

*/
//               0  1    2  3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// retorne os números maiores que 10
/* 
filter recebe uma fução de call back


function cucallbackFilterzao(valor, indice, array) {    
    return valor > 10;
}
const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);


const numerosFiltrados = numeros.filter(function(valor){
    return valor > 10;
});


const numerosFiltrados = numeros.filter((valor, indice, array) => {
    return valor > 10;
});

const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);
*/

// Retorna as pessoas que tem o nome com 5 letras ou mais
// Retorna as pessoas com mais de 50 anos
// Retorna as pessoas cujo nome termina com a

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 62},
    {nome: 'Wallace', idade: 47},
];

const pessoasComNomeGrande = pessoas.filter(valor => valor.nome.length >= 5 && 
                                                     valor.idade > 50 && 
                                                     valor.nome.toLowerCase().endsWith('a') );

console.log(pessoasComNomeGrande);
