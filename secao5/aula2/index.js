// Método Splice
//                 0       1        2           3          4 
//                 -5      -4       -3          -2         -1
// const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nome.splice(indiceinicial, qts elementos a remover, elementos a adicionar separados
// por virgulas);

// pop

/*
console.log(nomes);
const removidos = nomes.splice(3, 2);
console.log(nomes);
console.log(removidos);


console.log(nomes);
const removidos = nomes.splice(-3, Number.MAX_VALUE);
console.log(Number.MAX_VALUE); // número máximo permitido do javascript
console.log(nomes);
console.log(removidos);



console.log(nomes);
const removidos = nomes.splice(3, 0, 'Luiz');
// comece no indice 3 não adicione elemento e acrescente nesse indice
console.log(nomes);
const removidos1 = nomes.splice(3, 1, 'Adriano');
console.log(nomes);
*/

const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
console.log(nomes);
/*
let removidos = nomes.splice(3, 2, 'Luiz', 'Otávio');
console.log(nomes, removidos);
removidos = nomes.splice(-1, 1);
console.log(nomes, removidos);
*/
// let removidos = nomes.splice(0, 1);
// simulando o push
nomes.splice(nomes.length, 0, 'Luiz');
console.log(nomes);
nomes.splice(nomes.length, 0, 'Otávio', 'Miranda');
console.log(nomes);
// simulando o unshift
nomes.splice(0, 0, 'Luiz', 'Otávio', 'Miranda');
console.log(nomes);

