function mostraHora(){
    let data = new Date();

    return data.toLocaleDateString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
//console.log(mostraHora());

/*
function funcaoDoInterval(){
    console.log(mostraHora())
}
setInterval(funcaoDoInterval, 1000);
*/

const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 3000);

setTimeout(function() {
    console.log('Olá mundo!');
}, 5000);