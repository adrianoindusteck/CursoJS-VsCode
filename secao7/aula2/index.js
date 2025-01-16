/* 
const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;

    }

    get velocidade() {
        console.log('GETTER');
        return this[_velocidade];

    }

    set velocidade(valor) {
        console.log('SETTER');
        if(typeof valor !== 'number') return;
        if(valor >=100 || valor <= 0) return;
        this[_velocidade] = valor;

    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for(let i=0; i<=200; i++) {
    c1.acelerar();
}
console.log(c1);
c1.freiar();
//c1.velocidade = 1500;
c1.velocidade = 50; // sinal de atribuição estamos utilizando o setter

console.log(c1);
console.log(c1.velocidade);
*/

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;

    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        console.log(valor);
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Luiz', 'Miranda');
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Adriano Souza das Chagas';
console.log(p1.nome);
console.log(p1.sobrenome);


