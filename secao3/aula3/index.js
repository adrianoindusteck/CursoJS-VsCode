/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"
Falsy
false, 0, '', "", ``,null, undefined, NaN (valores avaliado em falso, sendo false o literal)

console.log('Luiz Otávio' && 0 && 'Maria');
console.log('Luiz Otávio' && true && 'Maria');
console.log('Luiz Otávio' && false && 'Maria');
console.log('Luiz Otávio' && true && NaN);
console.log('Luiz' && 'Maria'); // checa a expressão vai retornar o último valor
console.log('Luiz' && '' && 'Maria'); // retorna '' pq é avaliado em falso
console.log('Luiz' && undefined && 'Maria'); // retorna undefined pq é avaliado em falso

function falaOi () {
    return 'oi';
}

let vaiExecutar = 'Joãozinho';

console.log(vaiExecutar && falaOi());
*/

console.log(0 || false || null || 'Luiz Otávio' || true);
console.log(0 || false || null || true || 'Luiz Otávio');
const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'red';
console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);

const f = 0;
const g = null;
const h = false;
const i = false;
const j = NaN;

console.log(f || g || h || i || j);
console.log(f || g || 'Joaozinho' || i || j);
