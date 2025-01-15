/*
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        
        sobrenome,

        fala() {
            console.log(`${this.nome} está falando`)
        },

        comer() {
            console.log(`${this.nome} está comendo`)
        },

        beber() {
            console.log(`${this.nome} está bebendo`)
        },

    };

};
*/

/*

function criaPessoa(nome, sobrenome) {

    const pessoaPrototype = {
        fala() {
            console.log(`${this.nome} está falando`)
        },
    
        comer() {
            console.log(`${this.nome} está comendo`)
        },
    
        beber() {
            console.log(`${this.nome} está bebendo`)
        },
    }

    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        
        sobrenome: {value: sobrenome},

        

    }); // retorna um novo objeto com os prototypes e chaves configuradas

};

*/

const falar = {
    falar() {
        console.log(`${this.nome} está falando`)
    },
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`)
    },
};



const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`)
    },
};

//const pessoaPrototype = { ...falar, ...comer, ...beber };
const pessoaPrototype = Object.assign({}, falar, comer, beber); // composição ou mixing falando em programação

function criaPessoa(nome, sobrenome) {    

    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        
        sobrenome: {value: sobrenome},

        

    }); // retorna um novo objeto com os prototypes e chaves configuradas

};

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = criaPessoa('Maria', 'A.');
console.dir(p1);
console.log(p2);
console.log(p1.nome);