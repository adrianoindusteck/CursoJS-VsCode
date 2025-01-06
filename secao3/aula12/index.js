
const verdadeira = true;
/* 
let nome = 'Luiz'; // criando
var nome2 = 'Luiz'; // criando

não podemos redeclarar let 
var nome2 =  'Otavio';
let nome = 'Otavio'; // SyntaxError: Identifier 'nome' has already been declared


// let tem escopo de bloco {.... bloco}
// VaR SÓ TEM escopo de função

if (verdadeira) {
    let nome = 'Otavio';
    console.log(nome, nome2);
    console.log(nome === nome2);

    if (verdadeira) {
        let nome = 'Outra coisa';
        console.log(nome, nome2);
    }
}
console.log('Fora do Bloco', nome);


var nome2 = 'Otávio'; // redeclarada
console.log(nome, nome2);

if (verdadeira) {
    let nome = 'Otavio'; // criando
    var nome2 = 'Adriano'; // redeclarada
    console.log(nome, nome2);
    
    if (verdadeira) {
        let nome = 'Outra coisa'; // criando
        var nome2 = 'Claúdia'; // redeclarada
        console.log(nome, nome2);
        
    }
}

console.log('fora', nome, nome2);


var sobrenome = 'Miranda';
function falaOi() {
    console.log(sobrenome);
    if (verdadeira) {
        console.log(sobrenome);
    }
    // var nome = 'Luiz';
}

// console.log(nome);
falaOi();
*/

console.log(sobrenome);
// console.log(sobre); // corrigiu e não corre elevação

let sobre = "mir";


var sobrenome = 'Miranda';  // undefined acontece com todas as variáveis e faz a elevação (hosting), e acontece com função também