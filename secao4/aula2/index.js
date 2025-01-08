// Parâmetros da função
/*
Quando definimos uma função com a palavra function
internamente na função temos uma variavel chamanda arguments, que sustenta todos os argumentos enviados
que contém todos os arguments passado

declarar um parâmetro sem valor ele o inicializa como undefined
*/
function funcao( /*Parametros*/){ 
    
    console.log(arguments[0]);

}
funcao('Valor', 1, 2, 3, 4, 5, 6, 8, 9, 10); // enviando um argumento

function soma(){
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;       
    }
    console.log(total);
    
}
soma(1, 2, 3, 4, 5, 6, 7);

function funcao1(a, b, c, d, e, f){
    console.log(a, b, c, d, e, f);
};
funcao1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
funcao1(1, 2, 3);

function soma1(a, b = 2 /*adiciona um valor padrão a b*/, c = 4) {
    console.log(a + b + c);
}
soma1(2);
soma1(2, 10);
soma1(2, 10, 20);
soma1(2, '', 20);
soma1(2, 0, 20);
soma1(2, undefined, 20);

/* atribuição através de desestruturação

*/

function funcao3({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}

function funcao4([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

funcao3({nome: 'Luiz', sobrenome: 'Otávio', idade: 20});
funcao4(['Luiz Otávio', 'Miranda', 30]);

function conta(operador, acumulador, ...numeros /* ... é o rest operation e tem que ser o último */){
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
   
}

conta('+', 1, 20, 30, 40, 50);
conta('-', 1, 20, 30, 40, 50);
conta('*', 1, 20, 30, 40, 50);
conta('/', 1, 20, 30, 40, 50);

console.log('***************************')

const conta100 = function(operador, acumulador, ...numeros /* ... é o rest operation e tem que ser o último */){
    console.log(arguments);
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
   
};

conta100('+', 1, 20, 30, 40, 50);
conta100('-', 1, 20, 30, 40, 50);
conta100('*', 1, 20, 30, 40, 50);
conta100('/', 1, 20, 30, 40, 50);

console.log('***************************')

const conta1000 = (operador, acumulador, ...numeros /* ... é o rest operation e tem que ser o último */) => {
    // console.log(arguments); não existe arguments em arrow function
    console.log(operador, acumulador, numeros);
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
   
};

conta1000('+', 1, 20, 30, 40, 50);
conta1000('-', 1, 20, 30, 40, 50);
conta1000('*', 1, 20, 30, 40, 50);
conta1000('/', 1, 20, 30, 40, 50);