/* 
Aritméticos
+ Adição / Concatenação
- Subtração
* Multiplicação
/ Divisão
** Potenciaciao 2**10 (2 elevado 10)
% resto da divisão

Ordem de Precedência
()
**
* / %
+ -



let num1 = 5;
let num2 = 10;
let num3 = 10;
console.log(num1 + num2);
console.log(num1 + num2 + num2 + num1);
console.log(num1 + num2 * num3); // o operador de multiplicação tem precedência em relação a +
console.log((num1 + num2) * num3); // alteramos a precedência

num1 = '5';
num2 = 10;
console.log(num1 + num2);

num1 = 5;
num2 = 10;
console.log(num1 - num2);

num1 = 5;
num2 = 10;
console.log(num1 * num2);

num1 = 5;
num2 = 10;
console.log(num1 / num2);

num1 = 2;
num2 = 10;
console.log(num1 ** num2);

num1 = 11;
num2 = 3;
console.log(num1 % num2);

Incremento = ++
Decremento = --
let contador = 1;
contador++; // 2 
contador++; // 3
contador++; // 4
contador++; // 5
console.log(contador);

contador = 1;
++contador; // 2 
++contador; // 3
++contador; // 4
++contador; // 5
console.log(contador);

contador = 1;
console.log(contador++); // primeiro apresenta o valor e depois incrementa
contador = 1;
console.log(++contador); // primeiro incrementa e depois apresenta o valor

contador = 10;
console.log(contador--); // primeiro apresenta o valor e depois incrementa
contador = 10;
console.log(--contador); // primeiro incrementa e depois apresenta o valor



let contador = 1;
contador++;
console.log(contador); //  nesse caso não faz diferença se é pré incremento ou pós incremento

Operadores de atribuição
*/

const passo = 2;
let contador = 0;

contador = contador + passo;
console.log(contador);

contador = contador + passo;
console.log(contador);

contador = contador + passo;
console.log(contador);

contador += 50; // contador = contador + 50
console.log(contador);

contador *= 2; // contador = contador * 2
console.log(contador);

contador -= 7; // contador = contador * 7
console.log(contador);

contador = 2;
contador **= 10; // contador = contador ** 2
console.log(contador);


const num1 = 10;
const num2 = '5.2';
console.log(num1 * num2);
console.log(num1 + num2);
console.log(num1 + parseInt(num2)); // converte num2 para um number
console.log(num1 + parseFloat(num2)); // converte num2 para um number FLUTUANTE
console.log(num1 + Number(num2)); // converte num2 para um number

console.log(typeof num2);
