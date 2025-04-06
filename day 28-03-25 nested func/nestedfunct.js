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