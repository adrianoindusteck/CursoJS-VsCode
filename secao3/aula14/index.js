// atribuição por desestruturação (objeto)
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }

};

/*
console.log(pessoa);
console.log(pessoa.nome);
*/

// const { nome = 'Não Existe', sobrenome } = pessoa; // atribuição via desestruturação
// const { nome: n = '', sobrenome } = pessoa; // atribuição via desestruturação demos o nome para uma chave
// console.log(nome, sobrenome);
// console.log(n, sobrenome);
//const { endereco: {rua, numero}, endereco} = pessoa;
//const { endereco: {rua: r = 12345, numero}, endereco} = pessoa;
//console.log(r, numero, endereco);
const {nome, ...resto} = pessoa;
console.log(resto);

