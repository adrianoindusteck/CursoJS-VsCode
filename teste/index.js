


/*




const novasPessoas = new Map();

for(const pessoa of pessoas) {
    const { id } = pessoa;
    
    novasPessoas.set(id, { ...pessoa });
    
};



console.log(novasPessoas)
console.log(novasPessoas.get(2));

/*
for (const [identifier, { id, nome}] of novasPessoas) {
    console.log(identifier, id, nome);
}
   
for (const [identifier, { id, nome}] of novasPessoas) {
    console.log(identifier, id, nome);
}
    
for (const pessoas of novasPessoas.values()) {
    console.log(pessoas);
}
   

console.log(novasPessoas);
novasPessoas.delete(2);
console.log(novasPessoas);
*/

const pessoas = [
    {id:3, nome: 'Luiz'},
    {id:2, nome: 'Maria'},
    {id:1, nome: 'Helena'},
];

const novasPessoas = new Map();


for(const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}
console.log(novasPessoas);

for(const [identifier, {id, nome}] of novasPessoas) {
    console.log(identifier, id, nome);
}
console.log('#################################')
for (const pessoas of novasPessoas.values()) {
    console.log(pessoas);
}
console.log('#################################')
for (const pessoas of novasPessoas.keys()) {
    console.log(pessoas);
}
console.log('#################################')
for (const pessoas of novasPessoas.entries()) {
    console.log(pessoas);
}
console.log('#################################')
for (const pessoas of novasPessoas) {
    console.log(pessoas);
}



