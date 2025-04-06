// Generator function
// ► A generator-function is defined like a normal function, but whenever it needs to generate a value, it does so with the yield keyword rather than return keyword.


// when we apply *  in normal function after function keyword  then this normal function becomes generator function.and  use yield keyword inplace of return keyword

// ► Example:

// function* gen() {
//     yield 1;
//     yield 2;

// }

// let res = gen();
// console.log(res.next().value);
// console.log(res.next().value);
// console.log(res.next().value);



// Example

function* gen(a) {
    yield a+10;
    yield a+20;
    yield a+30;


}

let res = gen(10);
console.log(res.next().value);
console.log(res.next().value);
console.log(res.next().value);
console.log(res.next().value);
console.log(res.next().value);
