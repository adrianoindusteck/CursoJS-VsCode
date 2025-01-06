// Não Podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Não pode conter espaços ou traços
// Utilizamos camelCase
// Case Sensitive
// Não podemos redeclarar constantes com let
// Não Utilize VAR, Utilize LET.
/* 
const nome = 'João';
console.log(nome);
nome = 'Otavio'; TypeError: Assignment to constant variable.
não podemos fazer atribuições de constantes
 */

const primeironumero = 5; // Number
const segundonumero = 10;
const resultado = primeironumero * segundonumero;
const resultadoDuplicado = resultado * 2;
console.log(resultado);
console.log(resultadoDuplicado);
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);

// typeof retorna o tipo de constante
console.log(typeof(primeironumero));

console.log(primeironumero + segundonumero);





