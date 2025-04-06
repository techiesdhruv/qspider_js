// JAVASCRIPT ARRAYS

// ARRAYS: Array is a collection of different elements. An array is heterogeneous in nature.

// const arr=[10,10.40,"hello",True,[a,b],{"a":value},fun(){}]

// In JavaScript, we can create an array in 2 ways:

// 1. By array literal


// 2. By using an Array constructor (using the new keyword)



// 1) JavaScript array literal:
// when we use array operator([]) to define array that way is called as array literal.
// The syntax of creating an array using an array literal is:

// var arrayname = [value1, value2, ..., valueN];

// As you can see, values are contained inside [] and separated by , (comma).

// The .length property returns the length of an array.


// Example:

// var a=[10,20,"Hello"];


// var emp = ["Sonoo", "Vimal", "Ratan"];
// for (i = 0; i < emp.length; i++) {
//     document.write(emp[i] + "<br/>");
// }

// Output:

// Sonoo
// Vimal

// Index value: we can access the element from an arrray by using index value

// var a=[10,20,"Hello"];
//     console.log(a[0]);


// array legth is not fixed  it means that we can add or remove the value


// --------------------------------------------------------------------------------------


// array constructor : constructor means the first letter will be capital and use parentesis for example Number(),
// and number(): it is the method or function

// new keyword: it will create the one block of memory in heap area for that array/obj

// Array(10) :  output [emptyx10]
// Array('hello') :  output [hello]

// Array(10,5):output [10,5]
//  it means that when we use single numberic value inside the array constructor then it will create the space for according to that element 
//  and if we use more than one value then it will consider as a element and make the array of it 

// example
const a=new Array(10);
const b=new Array(10,5);

const c=new Array("Hello");

console.log(a);
console.log(b);
console.log(c);

