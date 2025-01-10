// concatenado arrays
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = a1 + a2;
console.log(a3);
console.log(typeof a3);

a4 = a1.concat(a2, [7, 8, 9], 'Luiz');
console.log(a4);
console.log(typeof a4);
// ... rest operator ou spread operator (espalhando o valor)
a5 = [...a1, 'Luiz', ...a2, ...[7, 8, 9]];
console.log(a5);
console.log(typeof a5);



