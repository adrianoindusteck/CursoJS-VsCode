// Herança
// Produto
//Camiseta, caneca
// Camiseta pode ter cor, caneca tem material ou plástico
// também teremos uma funcionalidade de aumento e desconto

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco); // lincamos as duas funções
}

/*
cada função construtora tem sua função prototype
*/

// Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco * (1 + (percentual/100));
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    //this.estoque = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;

        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const produto = new Produto('Gen', 111);
console.log(camiseta);
camiseta.aumento(100);
console.log(camiseta);
console.log(produto);
console.log(camiseta.prototype);
console.log(Produto.prototype);
console.log('#######################');
const caneca = new Caneca('Caneca', 13, 'plástico', 5);
console.log(caneca, caneca.estoque);
caneca.estoque = 100;
console.log(caneca, caneca.estoque);

