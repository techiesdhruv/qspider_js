//-------------------------------------------------------------------- ADVANCE ARRAY METHODS -----------------------------------------------------

// FOR EACH()
// Filter()
// Find()
// map()
// reduce()
// reduceRight()
// sort()

// ----------FOR EACH(): is the higter order function which is used to iterate the array.
                        //  it will accept one parameter that is call back function and that call back function accept three parameter i.e element,index,and complete array.

//  SYNTAX :        arr.forEach(callback function)   
                    //arr.forEach((ele,i,ar)=>{})

// let arr=[10,7,70,50,40,'hwllo'];


// arr.forEach((elemnt,index,ar)=>{
    // console.log(elemnt);
    // console.log(index,elemnt);
    // console.log(ar);//we are getting output of same array of equal times to the total no of elements presents inside the array

// });

//5 we want to add 5 in each elment

// arr.forEach((elemnt,index,ar)=>{
//     console.log(elemnt+5);
// });
// console.log(arr);

//practice
// arr.forEach((e,i,ar)=>{if (e%2==0){console.log(e);}}); //for only even no 
// arr.forEach((e,i,ar)=>{if (e%2==0){console.log(e,i);}}); //for only even no with index 
//-------------------------------------------------------------------------------------------


// for each: will not return any kind of value as you can see below

// let result=arr.forEach((elemnt,index,ar)=>{
//    return elemnt+5})

// console.log(result); //o/p: undefined



// --------------------------------------------------------Map: the functionality of map and forEach is similar but there is only one difference is that forEach does not return any type of update value when we use return keyword as we have seen in (line:45, undefined) while Map method retrun the updated value as (line :58,see below it)


// SYNTAX :        arr.map(callback function)   
                    //arr.map((ele,i,ar)=>{})


// let arr=[10,7,70,50,40];

// let result=arr.map((elemnt,index,ar)=>{
//     return elemnt+5;})

// console.log(result); //o/p: it will return the updated array



//----------------------------------------------------------- Filter: filter the array on the specific condition 
                                                                    //  in map function we give the expression in return keyword  but inside filter methods we give the condition inside the retrun
                                                                    // filter method retrun filter array
 
// SYNTAX :        arr.filter(callback function)   
                   //arr.filter((ele,i,ar)=>{})

// let arr=[10,7,70,80,50,40];
// let result=arr.filter((elemnt,index,ar)=>{
//     return elemnt>50})
                    
//  console.log(result); //o/p: it will return the filter array


// we can pass mutiple condition

                    
// let result=arr.filter((elemnt,index,ar)=>{
// return elemnt>20 && elemnt<80})
                    
// console.log(result); //o/p: [70, 50, 40]


// --------------------------------------------------------------Find: function of find and filter is same and syntax is also same . difference is only in retrun type.
            //  the retrun type of filter is the multiple value in array while in find the  retrun type of find is single value as a output

// let arr=[10,7,70,80,50,40];

// let result=arr.find((elemnt,index,ar)=>{
// return elemnt>20 && elemnt<80})
                    
// console.log(result); //o/p: 70  we arr getting only one value not multiple value like filter 


//----------------------------------------------------------------------------------------------------------------//-------------------------------------------


// let ar=[50,70,20,10,80,40];

// find the summation of the array

// let sum=0;
// ar.forEach((ele,i,arr)=>{
//     sum+=ele;

// })
// console.log(sum);

// -------------------------------------------------------------------reduce:  is used to reduce the array and and retrun the single value

// SYNTAX: arr.reduce(callback function , initialvalue)

    //    arr.reduce((accumulator,current value)=>{},initialvalue)

// accumulator=a variable where we want to store the new value as in above case (sum) variable is storing the data 
//current value=is the iteration of the element, as above case (ele) is the iteration.
//initial value= is the value from where we want to do initialize ,as in above case (sum=0,so we are initializing it from 0) 



// let ar1=[50,70,20,10,80,40];

// let result1=ar1.reduce((sum,ele)=>{return sum+ele},0)
// console.log(result1);


// concise code of result1 or above example

// let result1=ar1.reduce((sum,ele)=> sum+ele,0) //arrow function is the explict function so we remove the curyl braces and retrun keyword to consise the code
// console.log(result1);




// --------------------------------------------------------reduceRight: reduceRight execute from Right to left and reduce execute from left to right

// SyntaX:arr.reduceRight(callback function , initialvalue)

    //    arr.reduceRight((accumulator,current value)=>{},initialvalue)
           



// -----------------------------------------------------------------sorting method : sort arry in ascending order or desceinding order 
  
// SYNTAX: 
        // arr.sort(callbackfunction)
        //arr.sort ((p1,p2)=>{}) //p1=first parameter,p2=second parameter

// let a=[50,70,20,10,80,40];

// let sort=a.sort((a,b)=> {return b-a});
// or consise way 
// let sort=a.sort((a,b)=>b-a)

// console.log(sort);//we will get in descending order

//ascending order 
// let sort=a.sort((a,b)=> a-b);
// console.log(sort);//we will get in aescending order





//---------------------------------------------------------------------------------practice question ----------------------------------------------------

// practice question on this topic

// 1     Write a function that logs each element of an array to the console using for each 

a=[1,2,45,65,'hello',true]

// a.forEach((ele,i,arr)=>{console.log(ele);})

//or consise way

// a.forEach((ele)=>console.log(ele));




//2   Given an array of numbers, use  to calculate and log the sum of all elements.

// let arr=[25,50,75,60]

// sum=0;

// arr.forEach((ele,i,arr)=>{console.log(sum+=ele);})

//or
// arr.forEach((ele,i,arr)=>{ return sum+=ele});
// console.log("sum :", sum);


//or no output
// let result=arr.forEach((ele,i,arr)=>{return sum+=ele})
// console.log(result);

//or

// arr.forEach=arr.forEach(ele => sum+=ele)
// console.log(sum);


//3    Create an array of names and use  to append "Hello" before each name and log it.

// let arr=['dhruv','varun','sri','nakul']

// arr.forEach(ele => {console.log(`hello ${ele}`) });


//Here’s the full consolidated list of questions for you to copy:


// - **filter()**
// - Use `filter()` to create a new array containing only even numbers from an array of numbers.
// - Given an array of words, use `filter()` to create a new array containing only words longer than 5 characters.
// - Filter out people younger than 18 from an array of ages using `filter()`.

// - **find()**
// - Use `find()` to locate the first number greater than 50 in an array.
// - Locate a user with a specific ID in an array of user objects using `find()`.
// - Find the first word that starts with the letter "A" in a list of words using `find()`.

// - **map()**
// - Create a new array where each number is squared using `map()`.
// - Use `map()` to transform an array of strings into uppercase.
// - Given an array of prices, apply a 10% discount on each price using `map()`.

// - **reduce()**
// - Use `reduce()` to sum all elements in an array.
// - Concatenate an array of strings into a single sentence using `reduce()`.
// - Use `reduce()` to count the occurrences of each letter in a given word.

// - **reduceRight()**
// - Implement `reduceRight()` to concatenate an array of strings in reverse order.
// - Compute the product of all elements in an array using `reduceRight()`.
// - Traverse an array from right to left and accumulate values into an object using `reduceRight()`.

// - **sort()**
// - Sort an array of numbers in ascending order using `sort()`.
// - Arrange an array of words alphabetically using `sort()`.
// - Sort an array of objects with a `price` property from lowest to highest price using `sort()`.

 
//wra to remove the duplicates from the array

arr=[10,20,10,50,60,50]

// arr.filter((ele,i,a)=>{
//     if(count(ele)>1){
//         console.log(ele);
//     }
// })

//  let result =arr.filter((e,i,arr) =>{return arr.indexOf(e)==i})
//  console.log(result);

 //wra to find the frequency of the array element

 