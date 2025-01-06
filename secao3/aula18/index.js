/*
// const nome = 'Luiz Otávio';
const nome = ['Luiz', 'Otávio', 'Henrique'];


for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}


for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log('#####');

for (let i in nome) {
    console.log(nome[i]);
}
console.log('#####');

for (let valor of nome) {
    console.log(valor);
}

console.log('#####');

nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array)
});
*/

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

/*
for (let valor of pessoa){
    console.log(valor);
}
*/

// For Clássicos - Geralmente com iteráveis (arrays ou strings);
// For in - Retorna o índice ou chave (string, array ou objetos)
// for of - retorna o valor em si (iteráveis, arrays ou strings)

