// ----------------------------------------------objects -----------------------------------------------------------------------
// objects are the real world entity  having state and  behaviour. for example : tv remote ,car etc

//  two ways to create the objects
// 1. by using object literalls
// 2. by using object constructor

// -------------------------------------------------(1).by using object literalls ------------------------------------------------------

// syntax:
// const variablename ={key1:value1,key2:value2,...,key(n):value(n)}

// example:

const emp={
    // state/property
    name:'dhruv',
    sal:120000,
    deptNo:20,

    // behaviour

    wedding:()=>{
        console.log('john is getting married');
    },
    running:()=>{
        console.log('john is running')
    }
    
}

// 2 excess the value of objects we have 2 methods :

//------------------------------------------------------------------------------------------ 1st way:.dot notation

console.log(emp.name);
console.log(emp.deptNo);
 
// to call function

// console.log(emp.wedding()); // undefined

// emp.wedding();


//------------------------------------------------------------------------ 2nd way : Square bracket

// objectname['keyname' or "keyname" ] // we will pass key name in string form either in single double. 


// console.log(emp['name']); 
// console.log(emp['name']);

console.log(emp["wedding"]());  



// curd operation 

//-------------------- create 

// emp.age=30
// console.log(emp);

// -------------------------------------update 
// if the key is availabe then the value will be updated

// emp.age=45
// console.log(emp);

// ----------------------------------------------------delete
// we have to use delete keyword

// delete emp.age
// console.log(emp);


// -------------------------------------------------------------------------read
// we can read the object by objectname.keyname

// console.log(emp.name);

// ---------------------------------------------------------------------------------------2nd way : to create object  that is object Constructor

// syntax: const person=new Object()

// syntax: 
// const person=new Object()
// console.log(person); 

// adding the value inside this
// person.name="dubey",
// person.sal=4560,
// person.add="ramji"
// console.log(person);

// now i want to delte the add from this object

// delete person.add
// console.log(person);


//------------------------------------------------------------------------------ question-----------------------------------------------------------------

// const a='salary';
// const emp ={name:'harish'}  //output : {name: 'harish',salary:2000}

// solution

// const a='salary';
// const emp1 ={name:'harish',
//             [a]:2000 //[a] we want the value of a as a key in output so we use []
// }
// console.log(emp1);

// exmaple of shallow copy

// let em={name:'hari'}
// let pe=em

// pe.name='omkar' 
// // now we are cheking this omkar value will affect the previous name i.e hari so,

// console.log(pe);
// console.log(em);

// quest:this is deepcopy example bc we are using nested key

let e={name:'hari',
    skills:{frontend:'html'}
}
let p=e
p.skills.frontend='css'

console.log(p);
console.log(e);

// --------------------------------------------------------------------------------------------------------------------------------------------------------
    

