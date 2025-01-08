/*
Factory Functions
funões que retornam objetos
métodos são funções dentro do objeto
this refere a chaves do elemento
*/

/*
Construction Function - Função construtora

*/

// Exemplo 01

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome: 'Adriano',
        sobrenome,

        // getter

        get nomeCompleto() {
            return `${nome} ${this.sobrenome}`;
        },

        //setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            


        },

        fala: function(assunto){
            return `${nome} que tem ${this.peso} kg e ${this.nome} estão falando ${assunto}`
        },
        altura: a,
        peso: p,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },
        get imc1() { // vai passar a ser um atributo do objeto
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }

    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.80, 80);
const p2 = criaPessoa('Maria', 'Joaquina', 1.60, 42);
const p3 = criaPessoa('Júnior', 'Joaquim', 1.15, 110);
console.log(p1.nome + ' ' + p1.sobrenome);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nomeCompleto);
console.log(p1.fala('sobre JS'));
console.log(p1.nome);
console.log(`imc ${p1.imc()}`);
console.log(`imc ${p1.imc1}`);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log("#######################");
console.log(p2.fala('sobre Almoço'));
console.log(p2.nome);
console.log(`imc ${p2.imc()}`);
console.log(`imc ${p2.imc1}`);
console.log(p2.nome);
console.log(p2.sobrenome);
console.log("#######################");
console.log(p1.imc1);
console.log(p2.imc1);
console.log(p3.imc1);
