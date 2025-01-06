// for in -> lê os ídices ou chaves do objeto
/*
const frutas = ['Pera', 'Maça', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
   
   for (let indice in frutas) {
    console.log(indice, frutas[indice]);
   }
    */

   const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
   };

   for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
   }

   const chave = 'nome'
   console.log(pessoa[chave]);

   console.log(pessoa.nome);
   console.log(pessoa['nome']);
