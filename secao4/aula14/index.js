// Funções Geradores
/*
Entrega um determinado valor em uma posição especifica
lazy evaluation

*/

function* geradora1() {
    // código qualquer
    yield 'valor 1'; // yield similar ao return
    // código qualquer
    yield 'valor 2'; // yield similar ao return
    // código qualquer
    yield 'valor 3'; // yield similar ao return
}

const g1 = geradora1();

console.log(g1.next()); // done false pq tem mais valores a serem obtidos
console.log(g1.next().value);

console.log(g1.next()); // done false pq tem mais valores a serem obtidos
console.log(g1.next().value);

console.log(g1.next()); // done false pq tem mais valores a serem obtidos
console.log(g1.next().value);

console.log("###################");

const g2 = geradora1();
for(let valor of g2) {
    console.log(valor);
}

function* gerdadora2() {
    let i = 0;
    while(true) {
        yield i;
        i++;
    }
}

const g3 = gerdadora2();
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}
console.log("###################");
const g4 = geradora4();
for(let valor of g4){
    console.log(valor);
}


function* geradora5() {
    yield function() {
        console.log('vim do y1');
    };

    return function() {
        console.log('vim do return!')
    }// o return não deixa mais ter código abaixo

    yield function() {
        console.log('vim do y2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;
func1();
func2();
// func3(); não definida pq volta do return