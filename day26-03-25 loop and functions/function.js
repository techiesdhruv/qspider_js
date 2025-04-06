
var start=parseInt(prompt("give the Starting number"));
var end=parseInt(prompt("give the Ending number"));


// annonymous function

// let abc=function(start,end){
//     for(let i=start; i<end; i++){
//         if(i%2==0){
//             console.log(i);
//         }
        
//     }
// }
// abc(20,50);


// Named function

// function even(start,end){
//     for(let i=start; i<end; i++){
//         if(i%2==0){
//             console.log(i);
//         }
        
//     }
// }
// even(20,50);


//-------------------------------------- Functions with Expressions

// A function with an expression is storing any function inside a variable.

// let addit = function fun() {
//     console.log("Hello");
// };

// ----------------------------------Immediate Invoking Functions (IIFE)

// A function that is invoked immediately after declaration.

// (function fun() {
//     console.log("Hello");
// })(); 

// Calling fun() will cause an error because the function is immediately removed after execution.
// fun(); // Uncommenting this line will cause an error.




//--------------------------------------------------- Arrow Functions


// Arrow functions provide a short syntax for function declaration.


// const abc = () => {
//     console.log("Hi, I'm an arrow function");
// };

// abc();



// Function with explicit return

const addition = (a, b) => {
    return a + b; // Explicit return - developer defines the return value
  };
  
  console.log(addition(30, 80));
  
  // Two types of return statements:
  // 1) Implicit return
  // 2) Explicit return
  
  // Explicit return:
  // A value that is returned manually by the developer is known as an explicit return.
  
  // Implicit return:
  // A value returned automatically by the JavaScript engine is known as an implicit return.
  
  // Rules to achieve implicit return:
  // 1) Do not use the return keyword.
  // 2) Do not use function body brackets `{}`.
  // 3) The function should contain only one statement.
  
  const additionImplicit = (a, b) => a + b; // Implicit return
  console.log(additionImplicit(30, 80));



  // Write a JavaScript program to find the square of a given number


// using only an arrow function with implicit return.

const square = num => num * num; // Arrow function with implicit return

console.log(square(5)); // Output: 25

// Features of arrow functions:
// - Concise syntax
// - Implicit return

// -----------------------------------------

// --------------------------------------------------------Higher Order Functions

// A function that accepts another function as an argument is called a higher-order function.

function area(func) {
    const result = func() * func(); // Calls the function argument and squares its output
    console.log("Area:", result);
}

function squareValue() {
    return 5;
}

area(squareValue); // Output: Area: 25


// -----------------------------------------------Higher Order Functions

// Any function that accepts or returns another function is known as a higher-order function.

function higherOrderFunction(callback) {
    console.log("Executing higher order function");
    callback(); // Calling the passed function
}

function callbackFunction() {
    console.log("Callback function executed");
}

higherOrderFunction(callbackFunction);

// --------------------------------------------------

// ------------------------------------------Callback Functions

// A function passed as an argument to another function is called a callback function.

function square(num) {
    return num * num;
}

function processNumber(num, operation) {
    console.log("Processing number...");
    console.log("Result:", operation(num));
}

processNumber(5, square); // Here, 'square' is a callback function

// --------------------------------------------------


var start=parseInt(prompt("give the Starting number"));
var end=parseInt(prompt("give the Ending number"));


// annonymous function

// let abc=function(start,end){
//     for(let i=start; i<end; i++){
//         if(i%2==0){
//             console.log(i);
//         }
        
//     }
// }
// abc(20,50);


// Named function

// function even(start,end){
//     for(let i=start; i<end; i++){
//         if(i%2==0){
//             console.log(i);
//         }
        
//     }
// }
// even(20,50);


//-------------------------------------- Functions with Expressions

// A function with an expression is storing any function inside a variable.

// let addit = function fun() {
//     console.log("Hello");
// };

// ----------------------------------Immediate Invoking Functions (IIFE)

// A function that is invoked immediately after declaration.

// (function fun() {
//     console.log("Hello");
// })(); 

// Calling fun() will cause an error because the function is immediately removed after execution.
// fun(); // Uncommenting this line will cause an error.




//--------------------------------------------------- Arrow Functions


// Arrow functions provide a short syntax for function declaration.


// const abc = () => {
//     console.log("Hi, I'm an arrow function");
// };

// abc();



// Function with explicit return

// const addition = (a, b) => {
//     return a + b; // Explicit return - developer defines the return value
//   };
  
//   console.log(addition(30, 80));
  
  // Two types of return statements:
  // 1) Implicit return
  // 2) Explicit return
  
  // Explicit return:
  // A value that is returned manually by the developer is known as an explicit return.
  
  // Implicit return:
  // A value returned automatically by the JavaScript engine is known as an implicit return.
  
  // Rules to achieve implicit return:
  // 1) Do not use the return keyword.
  // 2) Do not use function body brackets `{}`.
  // 3) The function should contain only one statement.
  
//   const additionImplicit = (a, b) => a + b; // Implicit return
//   console.log(additionImplicit(30, 80));



  // Write a JavaScript program to find the square of a given number


// using only an arrow function with implicit return.

const square = num => num * num; // Arrow function with implicit return

console.log(square(5)); // Output: 25

// Features of arrow functions:
// - Concise syntax
// - Implicit return

// -----------------------------------------

// --------------------------------------------------------Higher Order Functions

// A function that accepts another function as an argument is called a higher-order function.

function area(func) {
    const result = func() * func(); // Calls the function argument and squares its output
    console.log("Area:", result);
}

function squareValue() {
    return 5;
}

area(squareValue); // Output: Area: 25


// -----------------------------------------------Higher Order Functions

// Any function that accepts or returns another function is known as a higher-order function.

function higherOrderFunction(callback) {
    console.log("Executing higher order function");
    callback(); // Calling the passed function
}

function callbackFunction() {
    console.log("Callback function executed");
}

higherOrderFunction(callbackFunction);

// --------------------------------------------------

// ------------------------------------------Callback Functions

// A function passed as an argument to another function is called a callback function.

function square(num) {
    return num * num;
}

function processNumber(num, operation) {
    console.log("Processing number...");
    console.log("Result:", operation(num));
}

processNumber(5, square); // Here, 'square' is a callback function

// --------------------------------------------------

// nested function



// Nested function  
// - A function which is declared inside another function is known as a nested function.  
// - Nested functions are unidirectional i.e., We can access parent function properties in a child function but vice-versa is not possible.  
// - The ability of the JS engine to search for a variable in the outer scope when it is not available in the local scope is known as lexical scoping or scope chaining.  
// for lexical scopping parents function should present in call stack

// - Whenever the child function needs a property from the parent function, the **closure** will be formed, and it consists of only the required data.  
// - A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function. Closures help in binding a function to its outer boundary and are created automatically whenever a function is created. A block is also treated as a scope since **ES6**. Since JavaScript is event-driven, closures are useful as they help to maintain the state between events.  




// syntax of nested function

// function parent(){
//     const a =30;
//     const b=50;

//     function child(){
//         const c=70;
//         console.log(a,c)
//             }
// }


// //////////////////////////////////////////////////////////////////////////////////////////////

// <!-- Nested function -->


// <!-- there are two way callling nested function

// 1) calling child function inside parent function

// 2) function currying /js currying -->



                      // 1) calling child function inside parent function

// function parent(){
//     const a =30;
//     const b=50;

//     function child(){
//         const c=70;
//         console.log(a,c)
//             }
//             child()
// }
// parent();

// /////////////////////////////////////////////////////////////////////////

// 1. calling child function inside parent fun.

// function parent() {
//     const a = 30;
//     const b = 50;

//     function child() {
//         const c = 70;
//         console.log(a, c);

//         function gChild(params) {
//             const d = 90;
//             console.log(a, c, d);
//         }
//         gChild();
//     }
//     child();
// }

// parent();


// ///////////////////////////////////////////////////////////////////

// function currying or js currying


// closure : closure is a object in js which is created  only when the child function is acessing the date from its outer scope
// for clousure the parent fun is present in call stack or not it will create the closure And closure only will hold the data which is required to the child function
// the priorty between lexcical scooping and clousre : the first priorty will be lexical scoping 
// and if lexcial scoping is not possible the closure will create
function parent(){
    const a=10;
    const b=50;

    function child(){
        const c=20
        console.log(a,c);

        function gChild(){
            const d=90;
            console.log(c,d);
        }
        return gChild;
    }
    return child;

}
parent()()()
// there are two nested function so two extra parentesis is used in the parent