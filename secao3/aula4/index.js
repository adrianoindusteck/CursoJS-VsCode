/*
Entre 0 - 11 - Bom Dia
Entre 12 - 17 - Boa Tarde
Entre 18 - 23 - Boa Noite
*/

// If pode ser usado sozinho

// Sempre que utilizo a palavra else, precisamos de um if antes

// Eu posso ter vários else ifs na checagem

// só posso ter um else na checagem

// Podemos usar condições sem else if, apenas com if e else


const hora = 50;

if (hora >=0 && hora < 12){
    console.log('Bom dia');
} else if (hora >= 12 && hora <18) {
    console.log('Boa Tarde');
} else if (hora >= 18 && hora < 24) {
    console.log('Boa Noite')
} else {
    console.log('Hora Inválida!')
}

const tenhoGrana = false;

if(tenhoGrana){
    console.log('Vou Sair de Casa');
} else {
    console.log('Não vou sair de casa');
}

if(tenhoGrana){
    console.log('Vou Sair de Casa');
}