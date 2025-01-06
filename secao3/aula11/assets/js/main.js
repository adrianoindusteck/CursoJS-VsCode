const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full'
};

h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});

/*
function btnCalculateDate(event){
    event.preventDefault();
    const inputDate = event.target.querySelector('#data');
    const inputTime = event.target.querySelector('#hora');

    let isDate = true;
    let msg = '';

    if (inputDate.value === ''){
        isDate = false;
        msg = 'Data inválida!';       
    } else if (inputTime.value === '') {
        isDate = false;
        msg = 'Hora Inválida'
    } else {
        const dtDate = new Date(inputDate.value + " " + inputTime.value);
        msg = getExtesionDate(dtDate);     
    }

    setResult(msg, isDate);

   


   
}

function getDayWeek(day){

    switch (day) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-feira';
        case 2:
            return 'Terça-feira';
        case 3:
            return 'Quarta-feira';
        case 4:
            return 'Quinta-feira';
        case 5:
            return 'Sexta-feira';
        case 6:
            return 'Sábado';
        default:
            return '';
    }
}

function getDayMonth(month){

    switch (month) {
        case 0:
            return 'Janeiro';
        case 1:
            return 'Fevereiro';
        case 2:
            return 'Março';
        case 3:
            return 'Abril';
        case 4:
            return 'Maio';
        case 5:
            return 'Junho';
        case 6:
            return 'Julho';
        case 7:
            return 'Agosto';
        case 8:
            return 'Setembro';
        case 9:
            return 'Outubro';
        case 10:
            return 'Novembro';
        case 11:
            return 'Dezembro';
        default:
            return '';
    }
}

function zeroLeft(number) {
    if (number >= 10) {
        return number;
    } else {
        return `0${number}`;
    }
}

function getExtesionDate(dtDate) {
    let msg = '';
    msg = getDayWeek(dtDate.getDay()) + ', ';
    msg += dtDate.getDate() + ' de ';
    msg += getDayMonth(dtDate.getMonth()) + ' de ';
    msg += dtDate.getFullYear() + ' ';
    msg += zeroLeft(dtDate.getHours()) + ':' + zeroLeft(dtDate.getMinutes());
    return msg;
}

function createP() {
    const p = document.createElement('p');
    return p;
}

function setResult(msg, isValid){

    const mainForm = document.querySelector('.formulario-principal');
    const resultado = document.querySelector('.resultado');

    mainForm.innerHTML = '';
    const p = createP();
    if (!isValid) {
        p.classList.add('error');
    } else if (isValid) {
        p.classList.add('correct-date');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);





}


function myScope(){
    const form = document.querySelector('.form')

    form.addEventListener('submit', btnCalculateDate)


}
myScope();
*/