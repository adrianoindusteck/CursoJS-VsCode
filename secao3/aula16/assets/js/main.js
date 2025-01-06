// developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM
const elementos =[ 
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'Section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

function createElement(strElement) {
    const tagElement = document.createElement(strElement);   
    return tagElement;
}

function myScope(){

    

    for (let i = 0; i < elementos.length; i++){
        let { tag, texto } =  elementos[i];
        let tagCriada = createElement(tag);
        //tagCriada.innerHTML = texto;
        //tagCriada.innerText = texto;
        let textoCriado = document.createTextNode(texto);
        tagCriada.appendChild(textoCriado);
        div.appendChild(tagCriada);
        /*
        const element = createElement(elementos[i].tag);
        element.innerHTML = elementos[i].texto;
        principal.appendChild(element);
        */
    }
    container.appendChild(div);

}

myScope();