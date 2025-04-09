// STRING CONCEPT IN JAVASCRIPT

// STRING: Collection of characters (or) bunch of characters we call it as string

// ----------------------------------------------------------------------------String methods:

// String length

// String slice()

// String substring()

// String replace()

// String replaceAll()

// String toUpperCase()

// String toLowerCase()

// String concat()

// String trim()

// String trimStart()

// String trimEnd()

// String padStart()

// String padEnd()

// String charAt()

// String charCodeAt()

// String split()


// --------------------------------------------------------------------------------String length--------------------------------------------
// -----------------------------------------------length is the property which is used to get the length of the string


// example

// const str="this is javascript"
// console.log(str.length)



// ---------------------------------------------------------------------------------String slice()----------------------------------
//                                                     it is used to fetech the part of the given string.
                                                    //  it doesnot affect the existing String.
                                                    // it can accept negative index value.

                                                //  syntax:
                                                //  varname.slice(startingindex,endingindex)
                                                // startingindex ---included
                                                // endingindex---excluded


// example

// const str="this is javascript"
// console.log(str.slice(8,18));
// console.log(str);

// console.log(str.slice(15,8));//no output


// console.log(str.slice(-10));
// console.log(str.slice(-10,-4));
// console.log(str.slice(-10,-15)); //no output , it means we cannot pass (large value,small value) , we can only pass the (largeval,small val)

// console.log(str.slice('',4));
// console.log(str);

// live practical example of slice in web
// let str1='this is javascript,javascript is a scripting language and programming language,which is used to make webpage interactive'
// console.log(str1.length>20 ? `${str.slice(0,20)}....`: str1);



// -----------------------------------------------------------------------substring():---------------------------------------------------------------
// is also used to fetech the part of the string , its objective is similar to slice.
// the difference between substring and slice is only that slice can accept the negative index value while substring doen't accept.

// example:

// const str="this is javascript,javascript is popular languae"
// console.log(str.substring(8,18));

// negative index  value : it will not acept any value.

// console.log(str.substring(-10,-1));//no output



// -----------------------------------------------------------------------------replace()---------------------------------------------------------------
// it is used to replace the first occurence the character 
// const str="this is javascript, javascript is popular languae"
// console.log(str.replace('javascript','python')) //it will replace only first occurence in a string

// // for replace All the occurence of partiular  character we will use the replaceAll()

// console.log(str.replaceAll('javascript','python')) //it will replace all the occurence of javascript with python occurence in a string


// --------------------------------------------------------------------------------toUpperCase(), toLowerCase()-----------------------------------------
// toUpperCase: to convert all the string in the upper case character.
// toLowerCase: to convert all the string in the lower case character.

// const str="tHis is JavascRipt, javascript is popular languae"

// console.log(str.toUpperCase());//o/p-(THIS IS JAVASCRIPT, JAVASCRIPT IS POPULAR LANGUAE)

// console.log(str.toLowerCase()); //o/p--(this is javascript, javascript is popular languae)


// ------------------------------------------------------------------------------------concat()----------------------------------
// concat(): this method is used to concat or join the two or more than 2 string.

// syntax; var1.concat(var2,var3,........varn)

// const str="tHis is JavascRipt, javascript is popular languae."
// const str2="this is dhruv dubey concatenation."
// const str3="this is third concatenation string."

// console.log(str.concat(str2));

// i want to space or any special character  between the contenation of two string then we will use interpolate technique
// console.log(str.concat(`@${str2}`));

// console.log(str.concat(str2,str3));

// console.log(str.concat(`${str2}`, `${str3} `));


// -------------------------------------------------------------------------------string trim(),trimStart(),trimEnd()-----------------
// trim(): this method is used to trim the starting spaces and ending spaces not the middle one.
// trimStart(): this method is used to trim the spaces from the starting or lefthand side.
// trimEnd(): this method is used to trim the spaces from the ending side or righthand side.

// sYntax:            varname.trim();
// syntax:            varname.trimStart();        // from the starting
// syntax:            varname.trimEnd();          // from the ending




// const str="                        this is dhruv dubey concatenation.                "

// console.log(str);
// console.log(str.trim());

// Note: this all trim method is used only for trimming the spaces.


//trimStart()

// console.log(str);
// console.log(str.trimStart());

//trimEnd()

// console.log(str);
// console.log(str.trimEnd());

// -------------------.---------------------------------------------------------string padStart--------------------------------------------------------

// padstart: padstart is used to hide the no.of character with the special character. 
// like we have adhar no of 12 digit i.e 123456789123  now we want to hide all 8 character or numver  with * then ********9123 like this 
// we can do this in 3 way: 

// 1: hide from Starting  = called padstart
// 2: hide from ending.  = called padend
// 3: hide from middle.  = called padmiddle

// padStart:

// syntax: slicepart.padStart(totalLengthof string,character by which we want to replace)

// example:


// const adharno="123456789123"

// const slicePart=adharno.slice(8,12); // we will get the last  4digit of a number
// console.log(slicePart.padStart(12,'*'));

// ----------------------------string padEnd---------------------------------------------
// syntax: 
//            slicepart.padEnd(totalLengthof string,character by which we want to replace)


// example:

// const adharno="123456789123"

// const slicePart=adharno.slice(0,5);
// console.log(slicePart.padEnd(12,'*'));


//------------------------ example for pddingg for middle------------------------------------

// const part1=adharno.slice(4,6)
// const part2=adharno.slice(6,8);

// console.log(part1.padStart(6,'*').concat(part2.padEnd(6,'#')));




// ---------------------------------------------------charAt: return character at that particular  index ----------
// charAt does not take the negative index value.

// varname.charAt(index value)

// const st='dhruvdubey'
// console.log(st.charAt(6)); // u

// negative index value
// console.log(st.charAt(-6));



// --------------------------------------------------------------------------------charCodeAt()--------------------------------------

// charCodeAt() return ascii vlaue at that particular character present inside the string. it takes the index value of that character as a argument.

// Syntax: charCodeAt(index value)"

// example": 

// const st='dhruvdubey'
// console.log(st.charCodeAt(4));

// ascii value is that value by which the computer know the alphabhet and no character. so simple to teach the computer that this is no or a or b or A or Z type of character, so computer know them with their ascii value 

// character          = their ascii value
//  A,B,C ..........Z = 65,66,67..............98.
// a,b,c............z =  97,98,.............122.
//0,1...............9 = 48,49,.........57.






// -------------------------------------------------------------------fromCharCode()--------------------------
//  it return the character froom ascii value

// syntax: String.fromCharCode(asciivalue of chracter)

// console.log(String.fromCharCode(65));


// -------------------------------------------------------------------------split()---------------------------------

// : this method is used to convert string into array.

// syntax: string.split() //it will give the string in a single single
// syntax: string.split("") //it will give the string in a single single character
// syntax: string.split("@") ////it will give the string in a single single


// const st='dhruvdubey'

// console.log(st.split())
// console.log(st.split(""))
// console.log(st.split("@"))

    

// --------------------------------------------------------reverse the string ----------------------------------------------------

// in default we have not any method to reverse the string . for revversing we have to first convert in array (with st.split("") method). and in array we have a reverse method for reversing.[arr.reverse()] then we join them.

// const st='dhruvdubey'

// console.log(st.split("").reverse().join(""));