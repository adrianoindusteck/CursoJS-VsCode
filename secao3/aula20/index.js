// usamos o laço for quando conhecemos o tamanho de um elemento
// o laço while ou do while é usado para situações que o tamanho do elemento
// ou numero de iterações é desconhecido

/*
const nome = 'Luiz';

let controle = 0;

while (controle <= 10) {
    console.log(controle);
    controle++;
}
controle = 0;
while (controle < nome.length) {
    console.log(nome[controle]);
    controle++;
}
console.log('Segue a vida');
*/

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}


const min = 1;
const max = 50;

let rand = random(min, max);
console.log(rand);
contador = 0;
console.log(rand !== 10);

/*
while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
    contador++;
}
*/

do{
    rand = random(min, max);
    console.log(rand);
    contador++;
} while(rand !== 10);

console.log('Tentativas', contador);


