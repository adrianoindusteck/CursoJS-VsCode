function relogio() {
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    function criarHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criarHoraDosSegundos(segundos);
        }, 1000);
    }

    document.addEventListener('click', function (evento) {

        const el = evento.target;

        if (el.classList.contains('iniciar')) {
            clearInterval(timer);
            iniciaRelogio();
            relogio.classList.remove('pausado');
        } else if (el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        } else if (el.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            relogio.classList.remove('pausado');
            segundos = 0;
        }


    });
}
relogio();

/*
let segundos = 0;
let minutos = 0;
let horas = 0;

let timer;
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');


iniciar.addEventListener('click', function(event){
    timer = setInterval(function() {
        atualizaHora();
     }, 1000);

});

pausar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.style.color = '#FF0000';

});

zerar.addEventListener('click', function(event){
    clearInterval(timer);
    segundos = 0;
    minutos = 0;
    horas = 0;
    relogio.innerHTML = `${zeroEsquerda(horas)}:${zeroEsquerda(minutos)}:${zeroEsquerda(segundos)}`;
    relogio.style.color = '#FF0000';

});

 function atualizaHora() {

    if ( segundos < 59 ) {
        segundos++;
    } else {
        segundos = 0
        if ( minutos < 59 ) {
            minutos++;
        } else {
            minutos = 0;
            if ( horas < 23 ) {
                horas++;
            } else {
                horas = 0;
            }
        }
    }
    relogio.innerHTML = `${zeroEsquerda(horas)}:${zeroEsquerda(minutos)}:${zeroEsquerda(segundos)}`;
    relogio.style.color = '#000000';

 }

 function zeroEsquerda(numero) {
   
    if (numero < 10) {
        return `0${numero}`
    }
    return numero
 }
*/
 

 