// Revisando Objetos

/*
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',

};


const chave = 'nome';
console.log(pessoa.nome);
console.log(pessoa['nome'], pessoa['sobrenome']);  
console.log(pessoa[chave]);
console.log(pessoa.sobrenome);


const pessoa = new Object();
pessoa.nome = 'Luiz';
pessoa.sobrenome = 'Otávio';

console.log(pessoa.nome);
console.log(pessoa.sobrenome);


const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

const pessoa2 = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
}

console.log(pessoa1, pessoa2);


const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 30;
pessoa1.falarnome = function () {
    console.log(`${this.nome} está falando seu nome.`)

};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;

};

//console.log(pessoa1);
//delete pessoa1.nome;
//console.log(pessoa1);
//essoa1.falarnome();
//console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1) {
    console.log(chave, pessoa1[chave]);
}

*/

// Factory Functions / Constructor Functions / Classes
/*
// function
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
};

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.nomeCompleto);
*/
// construction
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // não conseguimos nada nem alterar e nem criar, o freeze também funciona com arrays
}

// new faz
/*
{} cria um objeto vazio <- this e atrela a palavra this dentro dessa função -> e retorna o this
 {} <- this -> this

console p2 = {};
p2.n
*/

// p1 = (ENDERECOMEMORIA) -> 'Valor'
// p1 - (NOVOENDERECO...) NÃO PODE TER UM NOVO ENDERECO DE MEMORIA
// p1.ENDERECOMEMORIA = {nome: 'outra coisa'} isso pode que o valor é só uma referência de memória
const p1 = new Pessoa('Luiz', 'Miranda');
delete p1.nome;
//Object.freeze(p1); // travamos o objeto
p1.nome = 'outra coisa';
//p1.fala = function() {console.log('oi')};
//p1.fala();
const p2 = new Pessoa('Maria', 'Miranda');
console.log(p1);
console.log(p2);
console.log(typeof p1);


