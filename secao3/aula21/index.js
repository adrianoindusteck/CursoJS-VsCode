// break e continue funciona em todos os laços
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros){
    if (numero === 2 || numero === 5) {
        console.log(`Pulei o número ${numero}`)
        continue; // continua para próxima interação do laço
    }
    console.log(numero);
    if (numero === 7) {
        console.log(`sai no número ${numero}`);  // encerra interação do laço
        break;
    }
   
}


for (let i in numeros){
    let numero = numeros[i];
    if (numero === 2 || numero === 5) {
        console.log(`Pulei o número ${numero}`)
        continue; // continua para próxima interação do laço
    }
    console.log(numero);
    if (numero === 7) {
        console.log(`sai no número ${numero}`);  // encerra interação do laço
        break;
    }
   
}
console.log('#####')

for (let i = 0; i<= numeros.length; i++){
    let numero = numeros[i];
    if (numero === 2 || numero === 5) {
        console.log(`Pulei o número ${numero}`)
        continue; // continua para próxima interação do laço
    }
    console.log(numero);
    if (numero === 7) {
        console.log(`sai no número ${numero}`);  // encerra interação do laço
        break;
    }
   
}

console.log('#####')
let i = -1;
while (i<= numeros.length){
    i++;
    let numero = numeros[i];
    if (numero === 2 || numero === 5) {
        console.log(`Pulei o número ${numero}`)        
        continue; // continua para próxima interação do laço
    }
    console.log(numero);
    if (numero === 7) {
        console.log(`sai no número ${numero}`);  // encerra interação do laço        
        break;
    }
}

console.log('#####')
i = -1;
do {
    i++;
    let numero = numeros[i];
    if (numero === 2 || numero === 5) {
        console.log(`Pulei o número ${numero}`)        
        continue; // continua para próxima interação do laço
    }
    console.log(numero);
    if (numero === 7) {
        console.log(`sai no número ${numero}`);  // encerra interação do laço        
        break;
    }
} while (i<= numeros.length);




