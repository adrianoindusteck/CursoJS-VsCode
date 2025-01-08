/* 
Função construtora -> Objeto identica a função fábrica
na função construtora devemos mudar a conveção
de escrita da função
Factory -> criaPessoa
na função construtora -> Pessoa (new), pq ela será instanciada com a palavra new
a palavra new cria um novo objeto vazio
e faz o this apontar para esse objeto vazio e
retorna automaticamente esse objeto

*/

function Pessoa(nome, sobrenome) {
    // atributos ou métodos privados
    const ID = 123456;  // SÓ VAI ESTAR DISPONÍVEL DENTRA DA FUNÇÃO
    const metodoInterno = function() { // só vai estar disponível dentro da função construtora

    };
    // atributos ou métodos públicos
    this.nome = nome; //Pessoa.nome = nome
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(`${this.nome} : sou um método`);
    };
}

const p1 = new Pessoa('Luis', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');

console.log(p1.nome);
console.log(p2.nome);
console.log(p1);
console.log(typeof p1);
p2.metodo();
