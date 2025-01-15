// Prototypes
/*
Javascript é baseado em protótipos para passar propriedades e métodos
de um objeto para outro.

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela
primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótip (__proto__)
que vem da propriedade prototype da função construtora que foi usada para
criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o moto do
JS vai tentar encontrar este membro no próprio objeto e depois a cadeia
de protótipos é usada até o topo (null) até encotrar (ou não) tal membro.


*/

// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => 'Original: ' + this.nome + ' ' + this.sobrenome;
}
// prototype objeto atrelada a minha função construtora pessoa
//Pessoa.prototype.estouAqui = 'Hahahaha';
Pessoa.prototype.nomeCompleto = function() {    
    return this.nome + ' ' + this.sobrenome;
};


// instância a função construtora só serve de molde para gerar os objetos abaixo

const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Função Construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // <- Pessoa = Função Construtora
const data = new Date(); // <-- Função construtora
// Pessoa.prototype === pessoa1.__proto__
console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);
console.log(pessoa1.nomeCompleto());