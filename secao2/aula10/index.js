// string, number, undefined, null, boolean, symbol
const nome = 'Luiz'; // String
const nome1 = "Luiz"; // String
const nome2 = `Luiz`; // String

const num1 = 10; // number
const num2 = 10.52; // number

let nomeAluno; // sem inicializar recebe o valor undefined = não aponta para local nenhum na memória
const sobrenomeAluno = null;  // Nulo -> Não aponta para local nenhum na memória

/* nomeAluno e sobrenomeAluno embora possuem a mesma função não são idênticas 
 nenhuma variável é criada e atribuida o valor underfined sobre ela.
*/

const aprovado = false;  // booleano pode ser true ou false

console.log(typeof aprovado, aprovado);

const a = [1, 2];
const b = a; // b e a apontam para o mesmo valor da memória

console.log(a, b);

b.push(3);
console.log(a, b);

let c = 2;
const d = c;
console.log(c, d);
c = 3;
console.log(c, d);
/*

*/






