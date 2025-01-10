// defineProperty() e defineProperties()
/*
supondo que desejamos congelar apenas uma propriendade ou um conjunto de propriedades
de um objeto

*/
function Produto(nome, preco, estoque) {
    /*this.nome = nome;
    this.preco = preco;*/
    

    Object.defineProperty(this, 'estoque', { 
        enumerable: true, // permite ser exibido a chave
        value: function() {return estoque}, // valor da chave
        writable: false, // não podemos alterar o valor
        configurable: false // configurável e nem apagar
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // permite ser exibido a chave
            value: nome, // valor da chave
            writable: true, // não podemos alterar o valor
            configurable: true // configurável
        },
        preco: {
            enumerable: true, // permite ser exibido a chave
            value: preco, // valor da chave
            writable: true, // não podemos alterar o valor
            configurable: true // configurável
        },
    });

    /*
    Object.defineProperty(this, 'estoque', { 
        enumerable: true, // permite ser exibido a chave
        value: estoque, // valor da chave
        writable: true, // não podemos alterar o valor
        configurable: false // configurável
    });
    */

}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500;
delete p1.estoque;
console.log(p1);
console.log(p1.estoque());

console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
}

