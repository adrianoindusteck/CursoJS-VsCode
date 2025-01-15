// Manipulando Prototypes
/*
objeto literal é um new Object -> Object.prototype
*/
/*
const objA ={
    chaveA: 'A',
    // __proto__: Object.prototype (isso ocorrer por baixo dos panos)
};

const objB ={
    chaveB: 'B',
    // __proto__: Object.prototype (isso ocorrer por baixo dos panos)
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA); // fazendo __proto__: objA
Object.setPrototypeOf(objC, objB);

console.log(objA.__proto__ === Object.prototype);
console.log(objB.chaveA);
console.log(objC.chaveA);
console.log(objC.chaveB);
console.log(Object.getPrototypeOf(objA));''
*/

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco * (1 - (percentual/100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco * (1 + (percentual/100));
};

const p1 = new Produto('Camiseta', 50);
// literal
const p2 = {
    nome: 'Caneca',
    preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype);
console.log(p1);
p1.desconto(50);
console.log(p1);
p1.aumento(50);
console.log(p1);
console.log('####################');
console.log(p2);
p1.desconto(50);
console.log(p2);
p1.aumento(50);
console.log(p2);
console.log('####################');
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },

    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },

});
//p3.preco = 113;
p3.aumento(10);
console.log(p3);


