/*
function saudacao(nome){
    console.log(`Bom dia ${nome}!`);
}

saudacao('Adriano');
saudacao('Bernado');


function saudacao(nome){
    console.log(`Bom dia ${nome}!`);
    return 123456;
}

const variavel = saudacao('Adriano');
console.log(variavel);


function saudacao(nome){
    return `Bom dia ${nome}!`;  
}

const variavel = saudacao('Adriano');
console.log(variavel);


function soma(x, y){
    const resultado = x + y;
    console.log('Olá mundo');
    return resultado;
    console.log('Olá mundo1'); // como está após o return não é executado
}

console.log(soma(2, 2));
console.log(soma(3, 1));
console.log(soma(5, 10));

// console.log(resultado); // não conseguimos acessar fora da função
// const resultado = soma(10, 20);
// console.log(resultado);

// const resultado = soma(5);
// console.log(resultado); // Not a number por 

const resultado = soma('Adriano', 'Chagas');
console.log(resultado);



function soma(x = 1, y = 1){ // enviando valores padrões
    const resultado = x + y;    
    return resultado;
   
}

console.log(soma());
console.log(soma(2, 2));


const raiz = function(n){ // função anônima termina com ;
    return n ** 0.5;    
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));



const raiz = (n) => { // função arrow function termina com ;
    return n ** 0.5;    
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

*/

const raiz = n => n ** 0.5;   // forma simplificada de escrever uma arrow function
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));



