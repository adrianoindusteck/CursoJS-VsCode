const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;

let imc;
let anoNascimento;
imc = peso / (altura * altura);
anoNascimento = 2025 - idade;

/*
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem', altura, 'm e seu IMC é de ', imc);
console.log(nome, sobrenome, 'nasceu em', anoNascimento);
*/

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} m e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);// Template strings

