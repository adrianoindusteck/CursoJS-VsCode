// Funções recursivas

/*
Função que se chama de volta
*/

function recursiva(max) {
    console.log(max);
    if (max >= 10000) return;
    max++;    
    recursiva(max);
}

recursiva(0);
