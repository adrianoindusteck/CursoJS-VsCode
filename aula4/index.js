// Escopo Léxico
/*

A função conhece o local onde ela esta declarada
e os vizinhos ao redor dela
*/

const nome = 'Luiz';

function falaNome() {
    // const nome = 'Otávio';
    console.log(nome);
}

falaNome();

function usaFalaNome() {
    const nome = 'Otávio';
    falaNome();
}

usaFalaNome();
