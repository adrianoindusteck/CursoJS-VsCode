// Revisão básica de arrays
/*
const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes[2] = 'João';
console.log(nomes);
delete nomes[2];
console.log(nomes);


// funciona string, objetos, números
// forma de construir arrays utilizando construtor
const nomes = new Array('Eduardo', 'Maria', 'Joana');
nomes[2] = 'João';
console.log(nomes);
delete nomes[2];
console.log(nomes);


// valor por referência alteração em um faz no outro
const nomes = ['Eduardo', 'Maria', 'Joana'];
const novo = nomes;
console.log(nomes);
novo.pop();
console.log(nomes);


// spread para o que faz em novo não refletir em nomes
const nomes = ['Eduardo', 'Maria', 'Joana'];
const novo = [...nomes];
console.log(nomes);
novo.pop();
console.log(nomes);
console.log(novo);
console.log(nomes.length);
const removido = nomes.pop();
console.log(removido);
console.log(nomes);
nomes[2] = 'joana'
console.log(nomes);
const removido1 = nomes.shift();
console.log(nomes, removido1);

const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes.push('João');
nomes.push('Wallace');
console.log(nomes);


const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes.unshift('João');
nomes.unshift('Wallace');
console.log(nomes);


const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
const novo = nomes.slice(1, 3); // do indice 1 até o 2
console.log(novo);
const novo1 = nomes.slice(1, -2); // do indice 1 até o 2
console.log(novo1);



const nome = 'Luiz Otávio Miranda';
const nomes = nome.split(' ');
console.log(nomes);

const nome1 = 'Luiz,Otávio,Miranda';
const nome2 = nome1.split(',');
console.log(nome2);
*/

const nomes = ['Luiz', 'Otávio', 'Miranda'];
const nome = nomes.join(' ');
console.log(nome);

const nomes1 = ['Luiz', 'Otávio', 'Miranda'];
const nome2 = nomes1.join('/');
console.log(nome2);



