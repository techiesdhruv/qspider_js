// --------------------------------------------------OBJECT METHODS --------------------

// Objects can also have methods.

// Methods are actions that can be performed on objects.


// Object Methods:

// 1. keys: It will return array of keys


// 2. values: It will return array of values


// 3. entries: It will return array of keys and values


// 4. assign: It is used to merge two objects


// 5. seal: We can only update the properties


// 6. isSealed: It is used to check whether the particular object is sealed or not


// 7. freeze: We cannot do any modifications in an object


// 8. isFrozen: It is used to check whether the particular object is frozen or not


// 9. hasOwnProperty: It is used to check whether the particular property is present in an object or not
// ---

//--------------------------------------------------------- 1. keys: It will return array of keys--------------------------------------------------
// 
// keys methods are used to extract the all the keys present inside the object.
// syntax:Object(objectconstructior).keys(objectname)
// return type is array of keys


// const emp={
//     // state/property
//     name:'dhruv',
//     sal:120000,
//     deptNo:20,

//     // behaviour

//     wedding:()=>{
//         console.log('john is getting married');
//     },
//     running:()=>{
//         console.log('john is running')
//     }
    
// }
// console.log(Object.keys(emp));


// Object.keys(emp)[it will return the array so we can use all array method inside this]

// Object.keys(emp).forEach((element,i)=> {
    // console.log(emp[element]);


    // i want to get key : value in this form the output see below.

    // console.log(element ,":",emp[element]);
    // or'
//     console.log(`${element} : ${emp[element]}`);
// });;



// ------------------------------------------------------------------------------------2. values: It will return array of values.


// syntax:Object(objectconstructior).keys(objectname)
// return type is array of keys


// const emp={
//     // state/property
//     name:'dhruv',
//     sal:120000,
//     deptNo:20,

//     // behaviour

//     wedding:()=>{
//         console.log('john is getting married');
//     },
//     running:()=>{
//         console.log('john is running')
//     }
    
// }


// console.log(Object.values(emp));


// example


// const emp=[
//     {
//         name:'ashish',
//         empId:10,
//         empSalary:4000
//     },
//     {
//         name:'dhruv',
//         empId:11,
//         empSalary:4500
//     },
//     {
//         name:'essu',
//         empId:12,
//         empSalary:1500
//     },
//     {
//         name:'dd',
//         empId:13,
//         empSalary:4032
//     }
// ]

// question is i want to display all the data of the emp obj

// console.log(emp);

// emp.forEach((ele,i) => {
//     Object.keys(ele).forEach((k,i)=>{
//         console.log(`${k} : ${ele[k]}`);
//     })
    
// });
//  description of question : emp is array so we are using foreach method inside this ele is the all the objects present in emp then we get the keys and retrun the array of all key. because it is array so we will usse again for each 





// --------------------------------------------------------------3. entries: It will return array of keys and values
// it will retrun an array of keys and values

// syntax:Object(objectconstructior).entries(objectname)
// return type is array of array i.e [[key:value],[key,value]]
// we can say entries method convert object in to array.


// example


// const emp=
//     {
//         name:'ashish',
//         empId:10,
//         empSalary:4000
//     },
//     {
//         name:'dhruv',
//         empId:11,
//         empSalary:4500
//     },
//     {
//         name:'essu',
//         empId:12,
//         empSalary:1500
//     },
//     {
//         name:'dd',
//         empId:13,
//         empSalary:4032
//     }




// console.log(Object.entries(emp));

// console.log(Object.entries(emp));





// now we want ,we want to convert array to object for this there is method fromEntries() method are presernt.


// -------------------------------------------------fromEntries()

// syntax:Object(objectconstructior).fromEntries(objectname)





// const result =Object.entries(emp)
// console.log(result);

// console.log(Object.fromEntries(result));



// ---------------------------------------------------------------------------4. assign: It is used to merge two objects
// 


// syntax: assign(targetobject,source object)  // target object are that where we want to merge in the store and source object are that which we want to merge with the first object


// const emp1=
//     {
//         name:'ashish',
//         empId:10,
//         empSalary:4000
//     };
//     const emp2=
//     {
//         naam:'raman',
//         depno:20,
//         source:2345  
//     };

    // console.log(Object.assign(emp1,emp2));
    // console.log(emp1); //here, we can say this is affecting our emp1 (first object) 
    // so if we want to not affect the source object we will use single blank obj as a source objct

    // console.log(Object.assign({},emp1,emp2));
    // console.log(emp1);



//--------------------------------------------------------- 5. seal: We can only update the properties
// Syntax : Object.seal(objectname);
// when we seal the objectt then we cannot delete and insert any property or value inside the object but
// we can update the key values only 

// const emp1=
//     {
//         name:'ashish',
//         empId:10,
//         empSalary:4000
//     };

//     Object.seal(emp1); //sealed the objec

    // i am adding/insert a  new property
    // emp1.age=50

    // console.log(emp1);//we can add this property age inside the emp1 object.

    // now,i want to delte the any property present inside the emp1 object

    // delete emp1.name
    // console.log(emp1);


    // now i want to update the any value of the key present inside the object

    // emp1.name='dhruv'

    // console.log(emp1);




//--------------------------------------------------- 6. isSealed: It is used to check whether the particular object is sealed or not

0// if we want to check the whether the oject is sealed or not

// syntax: Object.isSealed()

// retrun type is bollean

// const emp1=
//     {
//         name:'ashish',
//         empId:10,
//         empSalary:4000
//     };


//     const emp2=
//     {
//         name:'dhrvu',
//         empId:20,
//         empSalary:4000
//     };

//     Object.seal(emp1); //sealed the objec


// console.log(Object.isSealed(emp1));

// console.log(Object.isSealed(emp2));


// -------------------------------------------------------------------7. freeze: We cannot do any modifications in an object
// the working of freeze is similar to the seal method but there is only differene it doesnot accept any updation of value inside the object but seal accept it

// Syntax:Object.freeze(object name)

// updatation,deltion,insertion are not possible inside the object


// const emp1=
//     {
//         name:'ashish',
//         empId:10,
//         empSalary:4000
//     };

//     Object.freeze(emp1); //freeze the object

//     // i am adding/insert a  new property
//     emp1.age=50

//     console.log(emp1);//we can add this property age inside the emp1 object.

//     // now,i want to delte the any property present inside the emp1 object

//     delete emp1.name
//     console.log(emp1);


//     // now i want to update the any value of the key present inside the object

//     emp1.name='dhruv'

//     console.log(emp1);








// 8. isFrozen: It is used to check whether the particular object is frozen or not

// if we want to check the whether the oject is sealed or not

// syntax: Object.isSealed()

// retrun type is bollean

// const emp1=
//     {
//         name:'ashish',
//         empId:10,
//         empSalary:4000
//     };


//     const emp2=
//     {
//         name:'dhrvu',
//         empId:20,
//         empSalary:4000
//     };

//     Object.seal(emp1); //sealed the objec


// console.log(Object.isSealed(emp1));

// console.log(Object.isSealed(emp2));




// 9. hasOwnProperty: It is used to check whether the particular property is present in an object or not
// the retrun type is boolean

// syntax; objectname.hasOwnProperty(keyname) //keyname: that we want to check inside the object is present or not

// const emp3=
// {
//     name:'dhrvu',
//     empId:20,
//     empSalary:4500
// };

// console.log(emp3.hasOwnProperty('name'));//true

// console.log(emp3.hasOwnProperty('age')); //false


// question fro practie 
// we want to check if the array value is present as a key inside the obejct then print the that value in the keyvalue pair, otherwise no print

// const arr=['empname','add','skills','empId','hike','companyName']

// const emp={
//     'empname':'john',
//     'skills':['java','python'],
//     'empId':123,
//     'companyName':'qspider'
// }
// arr.forEach((e)=>{
//     if(emp.hasOwnProperty(e))
//         console.log(`${e}:${emp[e]}`);

// })

// question 2

//  const emp3=
// [
//     {
//         name:'dhrvu',
//         empId:20,
//         empSalary:50000
//     },
//     {
//         name:'dhr2',
//         empId:21,
//         empSalary:30000
//     },
//     {
//         name:'dhr3',
//         empId:22,
//         empSalary:40000
//     }
// ];

// const hikeinpercentage=[40,60,80]

// emp3.forEach((ele,i)=>{
//     ele.empSalary=ele.empSalary+(hikeinpercentage[i]/100)*ele.empSalary

// })
// console.log(emp3);



// question3

const cities=['Gurgaon','bhind','morena','gwalior','newdelhi','noida']

// user will enter some character of cityname then show the that city name
var ch=prompt('enter the character ')
// cities.filter((el,i,ar)=>el.includes(ch)).forEach((ele)=>{
//     console.log(ele);})

// if we want to change is lowercase then

// cities.filter((el,i,ar)=>el.toLowerCase().includes(ch.toLowerCase())).forEach((ele)=>{
//     console.log(ele);
// })

// shorthand way

cities.forEach((ele,i)=>{
    ele.toLowerCase().includes(ch.toLowerCase()) && console.log(ele)
});
// here we have used the shortcircuit of and operator

// question 4

const data =[
    { id: 1, state: 'Haryana', city: 'Gurugram' },
    { id: 2, state: 'Haryana', city: 'Faridabad' },
    { id: 3, state: 'Haryana', city: 'Panipat' },
    { id: 4, state: 'Haryana', city: 'Ambala' },
  
    { id: 5, state: 'Maharashtra', city: 'Mumbai' },
    { id: 6, state: 'Maharashtra', city: 'Pune' },
    { id: 7, state: 'Maharashtra', city: 'Nagpur' },
    { id: 8, state: 'Maharashtra', city: 'Nashik' },
  
    { id: 9, state: 'Karnataka', city: 'Bengaluru' },
    { id: 10, state: 'Karnataka', city: 'Mysuru' },
    { id: 11, state: 'Karnataka', city: 'Mangaluru' },
    { id: 12, state: 'Karnataka', city: 'Hubli' },
  
    { id: 13, state: 'Tamil Nadu', city: 'Chennai' },
    { id: 14, state: 'Tamil Nadu', city: 'Coimbatore' },
    { id: 15, state: 'Tamil Nadu', city: 'Madurai' },
    { id: 16, state: 'Tamil Nadu', city: 'Salem' },
  
    { id: 17, state: 'Uttar Pradesh', city: 'Lucknow' },
    { id: 18, state: 'Uttar Pradesh', city: 'Kanpur' },
    { id: 19, state: 'Uttar Pradesh', city: 'Agra' },
    { id: 20, state: 'Uttar Pradesh', city: 'Varanasi' },
  
    { id: 21, state: 'Rajasthan', city: 'Jaipur' },
    { id: 22, state: 'Rajasthan', city: 'Udaipur' },
    { id: 23, state: 'Rajasthan', city: 'Jodhpur' },
    { id: 24, state: 'Rajasthan', city: 'Kota' },
  
    { id: 25, state: 'West Bengal', city: 'Kolkata' },
    { id: 26, state: 'West Bengal', city: 'Howrah' },
    { id: 27, state: 'West Bengal', city: 'Durgapur' },
    { id: 28, state: 'West Bengal', city: 'Siliguri' },
  
    { id: 29, state: 'Telangana', city: 'Hyderabad' },
    { id: 30, state: 'Telangana', city: 'Warangal' },
    { id: 31, state: 'Telangana', city: 'Nizamabad' },
    { id: 32, state: 'Telangana', city: 'Karimnagar' },
  
    { id: 33, state: 'Gujarat', city: 'Ahmedabad' },
    { id: 34, state: 'Gujarat', city: 'Surat' },
    { id: 35, state: 'Gujarat', city: 'Vadodara' },
    { id: 36, state: 'Gujarat', city: 'Rajkot' },
  
    { id: 37, state: 'Punjab', city: 'Amritsar' },
    { id: 38, state: 'Punjab', city: 'Ludhiana' },
    { id: 39, state: 'Punjab', city: 'Jalandhar' },
    { id: 40, state: 'Punjab', city: 'Patiala' }
  ]
  const state=prompt('Enter the state name');

  const result=data.filter((ele,i)=>{
  })