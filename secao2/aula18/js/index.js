let numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: <u><strong>${numero ** 0.5}</strong></u></p>`;
texto.innerHTML += `<p>${numero} é inteiro: <u><strong>${Number.isInteger(numero)}</strong></u></p>`;
texto.innerHTML += `<p>${numero} é Nan: <u><strong>${Number.isNaN(numero)}</strong></u></p>`;
texto.innerHTML += `<p>Arredondamento para baixo: <u><strong>${Math.floor(numero)}</strong></u></p>`;
texto.innerHTML += `<p>Arredondamento para cima: <u><strong>${Math.ceil(numero)}</strong></u></p>`;
texto.innerHTML += `<p>Com duas casas decimais: <u><strong>${numero.toFixed(2)}</strong></u></p>`;
