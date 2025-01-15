/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

// já vimos

Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
/*
const produto = { nome: 'Caneca', preco: 1.80 };
const outraCOisa = produto;
// nesta situação pŕoduto e OutraCoisa apontam para o mesmo endereço de memória

console.log(produto);
console.log(outraCOisa);
outraCOisa.nome = 'Lápis';
console.log(produto);
console.log(outraCOisa);
*/
/*
const produto = { nome: 'Caneca', preco: 1.80 };
const outraCOisa = { ...produto }; // forma de criar um objeto espalhando sem ter espelhamento de endereço
// e cada um ter seu conteúdo próprio

console.log(produto, outraCOisa);

outraCOisa.nome = 'Lápis';
outraCOisa.preco = 2.50;

console.log(produto, outraCOisa);


const produto = { nome: 'Caneca', preco: 1.80 };
const outraCOisa = { ...produto }; // forma de criar um objeto espalhando sem ter espelhamento de endereço
// e cada um ter seu conteúdo próprio

console.log(produto, outraCOisa);

outraCOisa.nome = 'Lápis';
outraCOisa.preco = 2.50;

console.log(produto, outraCOisa);
console.log(402 - 89.90 - 286);

// forma de copiar sem compartilhamento de endereço
const produto = { nome: 'Caneca', preco: 1.80 };
const outraCOisa = { ...produto, 
                        material: 'porcelana',
}; // forma de criar um objeto espalhando sem ter espelhamento de endereço
// e cada um ter seu conteúdo próprio

console.log(produto, outraCOisa);

outraCOisa.nome = 'Lápis';
outraCOisa.preco = 2.50;

console.log(produto, outraCOisa);

const produto = { nome: 'Caneca', preco: 1.80 };
const outraCOisa = Object.assign({}, produto, { material: 'porcelana' }); // outra forma de copia

console.log(produto, outraCOisa);

outraCOisa.nome = 'Lápis';
outraCOisa.preco = 2.50;



// Pior forma de copiar um objeto
const produto = { nome: 'Caneca', preco: 1.80 };
const outraCOisa = {
    nome: produto.nome,
    preco: produto.preco

};

console.log(produto, outraCOisa);

outraCOisa.nome = 'Lápis';
outraCOisa.preco = 2.50;

const produto = { nome: 'Caneca', preco: 1.80 };
Object.freeze(produto);
produto.nome = 'Outro nome';
const outraCOisa = { nome: produto.nome, preco: produto.preco };

console.log(Object.keys(produto));
console.log(produto);


const produto = { nome: 'Caneca', preco: 1.80 };
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // traz as propriedades o objeto
produto.nome = 'Outra coisa';
delete produto.nome;
//delete produto.preco;
console.log(produto);
*/

const produto = { nome: 'Caneca', preco: 1.80, material: 'porcelana'};
console.log(Object.values(produto));
console.log(Object.entries(produto));
console.log("###############");
for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}



