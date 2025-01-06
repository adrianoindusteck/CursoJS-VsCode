// operador ternário é (condicao)? (valor para verdadeiro) : (valor para falso) podendo encurtar o código
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >=1000 ? 'Usuário VIP' : 'Usuário normal';
const corUsuario = null;
const corPadrao = corUsuario || 'Preta'; // se corUsuario for nulla corPadrao será preta (false back)

console.log(nivelUsuario, corPadrao);


/*
if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
}
*/