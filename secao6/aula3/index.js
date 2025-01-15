//getters e setters

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.produto = this.produto;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        //value: estoque, // vamos usar o gett e setter para trabalhar o valor
        //writable: true, // teremos um método para trabalhar o valor
        configurable: true,
        get: function() { // é retornar o valor de uma propriedade
            return estoque;
        },
        set: function(valor) { // vai configurar o valor de uma propriedade
            if (typeof valor !== 'number') {
                throw new TypeError('Mensagem');
            }
            estoquePrivado = valor;
            


        }
    });

}

// factory function

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },

        set nome(valor) {
            valor = valor.replace('coisa.', '');
            nome = valor;
        },
    }

}

//const p1 = new Produto('Camiseta', 20, 3);
//p1.estoque = 'O valort que eu quero';
//p1.estoque = 500;
//console.log(p1, p1.estoque);

const p2 = criaProduto('Camiseta');
console.log(p2);
console.log(p2.nome);
p2.nome = 'Qualquer coisa.';
console.log(p2.nome);

