// Criando Classes
/*
Classe é a mesma coisa da função construtora

*/

class Pessoa {

    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} esta falando!`)
    }

    comer() {
        console.log(`${this.nome} esta comendo!`)
    }

    beber() {
        console.log(`${this.nome} esta bebendo!`)
    }

};

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando...`);
}


const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('Joana', 'Miranda');
const p3 = new Pessoa('Maria', 'Miranda');
const p4 = new Pessoa('João', 'Miranda');
const p5 = new Pessoa2('')
console.log(p1);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(typeof p1);
p4.falar();
