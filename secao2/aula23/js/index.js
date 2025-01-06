function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    //form.onsubmit = function (evento) {
        //evento.preventDefault();
        //alert(1);
        //console.log('Foi enviado');
    //};
    let contador = 1;
    function recebeEventoForm (evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        //console.log(nome.value, sobrenome.value, peso.value, altura.value);
        
        pessoas.push({
            indice: contador,
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas);
        resultado.innerHTML += `<p>${contador} - ${nome.value} ${sobrenome.value} ` +
        `${peso.value} ${altura.value}</p>`;
        contador++;
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();

