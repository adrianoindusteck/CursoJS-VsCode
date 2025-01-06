//console.log(isNaN('5a')); // retorna true se não é número
//console.log(Number.isInteger(5));


function traduz(numero){
    if (isNaN(numero)) {
        return 'Não é número válido!';
    } else {
        numero = Number(numero);       
        if (!Number.isInteger(numero)) {
            return 'Não é um número inteiro!'
        }
    }
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0 ) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, traduz(i));
}



