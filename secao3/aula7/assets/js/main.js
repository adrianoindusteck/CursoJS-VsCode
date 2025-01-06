
function meuEscopo(){
    // capturar evento de submit do formulário
    const form = document.querySelector('.form');
    // const form = document.querySelector('#formulario ou form, tanto faz'); ('#nome do id') ou ('.nome da classe")
    const resultado = document.querySelector('.resultado');
    function recebeEventoForm(evento){
        evento.preventDefault();
        const inputPeso = evento.target.querySelector('.peso');
        const inputaltura = evento.target.querySelector('.altura');
        
        const peso = Number(inputPeso.value);
        const altura = Number(inputaltura.value);

        if (!peso) {
            setResultado('Peso inválido', false);
            return;
        }

        if (!altura) {
            setResultado('Altura inválida', false);
            return;
        }

        const imc = getImc(peso, altura);
        const nivelImc = getNivelImc(imc);

        const msg = `Seu IMC é ${imc} (${nivelImc})`;

        setResultado(msg, true);





        console.log(nivelImc)


    }

    function getNivelImc(imc){
        const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1',
        'Obesidade grau 2', 'Obesidade grau 3'
        ];

        if (imc >= 39.9) return nivel[5];
               
        if (imc >= 34.9) return nivel[4];
        
        if (imc >= 29.9) return nivel[3];
        
        if (imc >= 24.9) return nivel[2];
        
        if (imc >= 18.5) return nivel[1];

        if (imc < 18.5) return nivel[0];

    }

    function getImc(peso, altura){
        const imc = peso / (altura ** 2);
        return imc.toFixed(2)
    }
    
    function criaP(){
        const p = document.createElement('p');
        return p;
    }

    function setResultado(msg, isValid){
        const resultado = document.querySelector('.resultado');
        resultado.innerHTML = '';
        const p = criaP();
        if (isValid) {
            p.classList.add('paragrafo-resultado');
        } else {
            p.classList.add('bad');
        }
        p.innerHTML = msg;
        resultado.appendChild(p);




    }

    // Para parar o evento do formulário, qual o evento devemos escutar
    form.addEventListener('submit', recebeEventoForm);
    /*
    form.addEventListener('submit', function (event) { 

    };)*/
}
meuEscopo();
