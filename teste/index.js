function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
    
};

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco * (1-(percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco * (1 + (percentual / 100));
};

function Camiseta(nome, preco, cor) {
    this.cor = cor;
    Produto.call(this, nome, preco);
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const camiseta = new Camiseta('Regata', 7.50, 'Preta');
const produto = new Produto('Gen', 111);

console.log(camiseta);
camiseta.aumento(100);
console.log(camiseta);

/*
console.log(typeof Produto, typeof Camiseta);
console.log(camiseta);
console.log(produto);
console.log(produto.aumento(10));
console.log(Object.getPrototypeOf(camiseta));
*/


