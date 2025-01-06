/*
try {
    // executada quando não há erros
    console.log('Abrir um arquivo');
    //console.log(f);
    console.log('Manipulei o arquivo e gerou erro');
    console.log('fechei o arquivo')
    try {
        console.log(b);
    } catch (e) {
        console.log('Deu erro');
    } finally {
        console.log('Também sou finally.');
    }
} catch (e) {
    // é executada quando há erros
    console.log('Tratar o erro');

} finally {
    console.log('FINALLY: Eu sempre sou executado')

}
*/

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false

    });
}

try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora();
    console.log(hora);
} catch(e) {
    // Tratar erro
} finally {
    console.log('Tenha um bom dia.')
}
