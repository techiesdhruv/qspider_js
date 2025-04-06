// JavaScript Array Methods

// ► push(): It will insert an element into an array at the end.

// ► unshift(): It will insert an element into an array at the beginning.

// ► pop(): It will remove elements from the end of the array.

// ► shift(): It will remove elements from the start of the array.

// ► indexOf(): It will return the index of a particular element.

// ► includes(): It will check whether a particular element is present in the array or not.

// ► at(): It will return the element present at a particular index.

// ► slice(): It will return a portion of an array without modifying the original array.

// ► splice(): It is used to add or remove elements from an array


// ---------------------------------------------------------------------------------------

// -----------------------------// ► push(): It will insert an element into an array at the end.


var a=[10,20,"Hello"];

// console.log(a);
// a.push(30)
// console.log(a);
// a.push(30,'hello')
// console.log(a);



// ------------------------------------------------ ► unshift(): It will insert an element into an array at the beginning.------------------------------


// var a=[10,20,"Hello"];
// console.log(a);

// a.unshift(50)
// console.log(a);


//-------------------------------------------------- ► pop(): It will remove elements from the end of the array.--------------------------------------------

// var a=[10,20,"Hello"];
// console.log(a);

// a.pop()

// console.log(a);



//---------------------------------------------------- ► shift(): It will remove elements from the start of the array.---------------------------------------


// var a=[10,20,"Hello"];
// console.log(a);

// a.shift()

// console.log(a);


//------------------------------------------------------ ► indexOf(): It will return the index of a particular element.--------------------------------------


// var a=[10,20,10,"Hello"];
// console.log(a);

// console.log(a.indexOf(20))

// // if arg is not present inside the arr then
// console.log(a.indexOf(2));

// // if arg is not given inside the arr then
// console.log(a.indexOf());

// //  if the arr is duplicate in the arr then it will give the first occurence then
// console.log(a.indexOf(10));

//            //    it you want to get the last occurence of dupplicate value then we have to use the lastIndexof()

//             console.log(a.lastIndexOf(10));



//----------------------------------------------------- ► includes(): It will check whether a particular element is present in the array or not. it takes only one arguemnt-----------


// var a=[10,20,10,"Hello"];
// console.log(a);

// console.log(a.includes(10));

// // if arg is not present inside the arr then

// console.log(a.includes(30));

// // // if arg is not given inside the arr then

// console.log(a.includes());

// // if we pass the multiples values in argument then

// console.log(a.includes(10,20));


//---------------------------------------------------------------------- ► at(): It will return the element present at a particular index.---------------------


// var a=[10,20,10,"Hello"];
// console.log(a)

// console.log(a.at(2));

// console.log(a.at(3));

// // if we pass the index value out of range then

// console.log(a.at(5));


// --------------------------------------------------► slice(): It will return a portion of an array without modifying the original array.-----------------
                                                      
                                                        // syntax : Array.slice (startindex,endindex)

                                                        // startindex included but endindex is not included

// slice method can accept negative index value

// var a=[10,20,10,"Hello"];

// const startindex=a.indexOf(20)
// const endindex=a.indexOf('Hello')

// console.log(a.slice(startindex,endindex))

// console.log(a.slice(startindex,endindex+1))

// console.log(a.slice(-3,-1));



//------------------------------------------------------------------ ► splice(): It is used to add or remove elements from an array---------------------------
                                                                   
                                                                    // syntax : a.splice(startindex,no.of elment you want to remove,add the element on the place of that removing elment(if can add more vlues in place of removing value))


// slice method affects the origina array while splice method will affect the original array

// var a=[10,20,10,"Hello"];

// console.log(a);

// console.log(a.splice(0,2,50,60,70));

// console.log(a);



//-------------------------------------------------------------------- ADVANCE ARRAY METHODS -----------------------------------------------------

// FOR EACH()
// Filter()
// Find()
// map()
// reduce()
// reduceRight()
// sort()


// --------------------------------------------------------------------Join():this method is used to convert the array in to string ----------------

// var a=[10,20,10,"Hello"];

// console.log(a.join(""));
// // console.log( typeof a.join(""));


// console.log(typeof (a));
// // because arr is the primitive data type so all primitive data type its types always object

// console.log( typeof typeof (a));  
// // always when we use two times typeof then we will get string

//  console.log(a.join());

//  console.log(a.join("-"));



// -----------------------------------------------------------------------concat():concat method is used to merger two or more than two array.-----------

// const arr1=[10,20,30]
// const arr2=[40,50,60]
// const arr3=[70,80,90]


// console.log(arr1.concat(arr2));

// console.log(arr1.concat(arr2,arr3));





// the concat() method doesnot affect the existing array whereas it will return new array
// console.log(arr1);


// ----------------------------------------------------------------------------reverse(): to reverse the array-------------------------------------

const arr2=[40,50,60]

console.log(arr2);

console.log(arr2.reverse());


