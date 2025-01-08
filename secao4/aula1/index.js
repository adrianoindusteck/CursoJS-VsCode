/* Aula 68 as várias maneiras de declarar uma função */
// Definição de função (function hoisting)
// a hoisting vai elevar para o topo junto com as variáveis declaradas através do VAR
// isso significa que podemos chamar a função antes ou depois de sua declaração pois são elevada no topo
// pelo motor do JS
falaOi();
function falaOi() {
    console.log('oi');
}
falaOi();

/*
First Class objects (Objetos de Primeira Classe)
São tratadas como dados,
Function Expression
*/

const nome = 'Luiz';

const souUmDado = function () {
    console.log('Sou um Dado');
}

souUmDado();

const souUmDado1 = function souOutroDado () {
    console.log('Sou outro Dado');
}

souUmDado1();

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo');
    funcao();
}
executaFuncao(souUmDado);


// Arrow function

// Tipo de function Expression mais curta

const funcaoArrow =  () => {
    console.log('Sou um arrow function')
};

funcaoArrow();


// Dentro de um objeto

const obj = {
    falar: function() {
        console.log('Estou falando ....');
    }
};

obj.falar();






