/*
try {
    console.log(naoExisto);
} catch(err) {
    console.log('naoExisto não existe.');
    console.log('######################');
    console.log(err);
    console.log('######################');

}
*/

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('x e y precisam ser números.');
        //throw new ReferenceError('x e y precisam ser números.');
        //throw new Error('x e y precisam ser números.');
        //throw ('x e y precisam ser números.');
    }
    return x + y;
}

try {

    console.log(soma(1, 2));
    console.log(soma('1', 2));

} catch (error) {
    console.log(error);
    console.log('Alguma coisa mais amigável para o usuário')
}
