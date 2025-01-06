// let umaString = "Um \"Texto\""; // Escapa o caractere \ (escapamento, seria um escape) \\ exibe uma barra uma é o escape e outra a barra
// console.log(umaString);


/*
//               01234567
let umaString = "Um texto"
console.log(umaString[4]);
console.log(umaString[8]);
console.log(umaString.charAt(6)); // retorna o elemento na posição 6
console.log(umaString.charAt(8)); // retorna vazio senão tiver no range
console.log(umaString.concat(' em', ' um', ' lindo dia.'));
console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia`);
console.log(umaString.indexOf('texto')); // qual indice começa a palavra texto
console.log(umaString.indexOf('Texto')); // qual indice começa a palavra texto, retorna -1 senão foi encontrado
console.log(umaString.indexOf('texto', 3)); // qual indice começa a palavra texto a partir do índice 3
console.log(umaString.lastIndexOf('o')); // pesquisa de traz frente
console.log(umaString.lastIndexOf('o', 3)); // pesquisa de traz frente a partir da posição 3
console.log(umaString.lastIndexOf('m', 3)); // pesquisa de traz frente a partir da posição 3
console.log(umaString.match(/[a-z]/g));
console.log(umaString.match(/[a-z]/));
console.log(umaString.search(/x/g));
console.log(umaString.replace('Um', 'Outra'));
console.log(umaString.replace(/Um/, 'Outra'));
*/

let umaString = "O rato roeu a roupa do rei de roma."
console.log(umaString.replace(/r/,'#'));
console.log(umaString.replace(/r/g,'#'));
console.log(umaString.length);
console.log(umaString.slice(2, 6));
console.log(umaString.slice(-3)); // de traz para frente do 35-3
console.log(umaString.slice(-5));
console.log(umaString.slice(-5, umaString.length-1));
console.log(umaString.slice(-5, -1));
console.log(umaString.substring(umaString.length-5, umaString.length-1));

console.log(umaString.split(' '));
console.log(umaString.split('r'));
console.log(umaString.split(' ', 2));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());

console.log(umaString.split(' '));
console.log(umaString.split(' ').length);











