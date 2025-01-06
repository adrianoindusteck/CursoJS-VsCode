/*
const array = [1, 2, 3];
array[2] = 5;
array.push(4);
array[0] = 'Luiz';
console.log(array); 
// array = 'Outra' // Assignment to constant variable, se fosse let poderiamos redeclarar
*/
/*
const nome01 = 'Luiz';
const sobrenome01 = 'Miranda';
const idade01 = 25;

const nome02 = 'Maria';
const sobrenome02 = 'Oliveira';
const idade02 = 55;

const pessoa1 = {
    nome: 'Luiz', 
    sobrenome: 'Miranda',
    idade: 25
};

const pessoa2 = {
    nome: 'Maria', 
    sobrenome: 'Oliveira',
    idade: 55
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

function criaPessoa (nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}


function criaPessoa (nome, sobrenome, idade){
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
const pessoa3 = criaPessoa('João', 'Moreira', 55);
const pessoa4 = criaPessoa('Júnior', 'Lara', 44);
const pessoa5 = criaPessoa('Jean', 'Otávio', 69);

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade);
*/

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala (){ // método que é uma função
        console.log(`${this.nome} ${this.sobrenome} está falndo oi ...`)

    },
    incrementaIdade(){
        ++this.idade;
    }
}

pessoa1.fala();
console.log(pessoa1.idade);
pessoa1.incrementaIdade();
console.log(pessoa1.idade);






