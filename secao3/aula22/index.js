const num1 = 10;
const num2 = 15;

function max(x, y){
    return x > y ? x : y;
}

const max2 = (x, y) => x > y ? x : y;

console.log(max(num1, num2));
console.log(max2(num1, num2));