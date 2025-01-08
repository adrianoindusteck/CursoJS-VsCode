/*
IIFE -> Immediately invoked function expression
Protege a função do escopo global.
function qualquerCoisa() { // função toca o escopo global
    console.log(111234);
}

qualquerCoisa();
*/

(function(idade, peso, altura) {
    const sobrenome = 'Miranda';    
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }


function falaNome() {
    console.log(criaNome('Luiz'));
}

falaNome();
console.log(idade, peso, altura)
})(30, 80, 1); // argumentos da IIFE

const nome = "Qualquer coisa"

