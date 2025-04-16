// Destructuring in JS

// Destructuring is a technique used to extract the elements from arrays and objects.

// spread operator and rest parameter

// We can achieve destructuring by using spread operator and rest parameters.

// spread opertor: it is used to unpack the elements
// syntax: ...variable_name

// example
// const emp = {
//     name: "Tushar",
//     skill: {
//       frontEnd: ["HTML", "CSS", "JS", "React", "Angular", "vueJs"],
//       backEnd: ["Java", "python"]
//   }
//   };



// rest parameter: it is used to collect or pack the elements.
// syn: ...variable_name
// rest parameter always return array.

// const emp = {
//     name: "Tushar",
//     skill: {
//       frontEnd: ["HTML", "CSS", "JS", "React", "Angular", "vueJs"],
//       backEnd: ["Java", "python"]
//   }
//   };

//   const{name,skills:{frontEnd:[a,...c]}}={...emp}
//   console.log(c);
//   console.log(a);




// two type of destruction 
// array destruing 
// object destructuring

// const arr=[10,20,40,[60,70,90,[77,88,99],100]];
// // we are doing summation of array particular value
// console.log(arr[3][0]+arr[3][2]+arr[3][3][0]+arr[3][3][2]);

// array destruing 
// rules
// 1 . we have to use array operator ,[]
// 2. we can use any variable name 
// 3. in array destructing we cant skip the elements in array destruing

// now,we will do summation of array with the help of array structuring

// const [a,b,c,[d,e,f,[g,h,i],j]]=[...arr] //[...arr] is the spread operator we are using
// console.log(d+f+g+i);


// const arr1=[10,20,40,[60,70,90,[77,88,99,73,48,86],100]];
// const [a,b,c,[d,e,f,[g,h,...i],j]]=[...arr1] //[...arr] is the spread operator we are using
// console.log(i);
// console.log(g);


// qustion

// const arr1=[10,20,[30,50,[60,50,[77,88],99,[79,90]]]];
// const [a,b,[c,d,[e,f,[g,h],i,[j,k]]]]=[...arr1]
// console.log(g+h+j+k);


// ----------------------------------------------------------------

// object destruing
// rules
// we have to use {}
// we can skip the element. (as we have done in below example , we only want html so we also use the skills key)
// we have to use the variable name as the key name.

// ex

// const emp1 = {
//     name: "Tushar",
//     skills: {
//       techSkills: {
//         frontEnd: ["HTML", "CSS", "JS"],
//         backEnd: ["JAVA", "PYTHON"]
//       },
//       softSkills: ["communication", "logical thinking", "time management"]
//   }
//   };
//   const{skills:{techSkills:{frontEnd:[a]}}}={...emp1}
// console.log(a);

// example:

// const arr = [
//     10,
//     30,
//     {
//       empName: "Tushar",
//       skills: {
//         frontEnd: ["HTML", "CSS", "JS"],
//       },
//       subect: {
//         technical: ["JAVA", "Python", "Dotnet"]
//   }
//   }
//   ];

//   const [a,b,{empName,skills:{frontEnd:[d,e,f]},subect : {technical :[g,h,i]}}]=[...arr]
//   console.log(empName);
//   console.log(d);
//   console.log(f);

// question : destructing the vanillaJs

const student = {
    name: "ABC",
    study: {
      college: "XYZ",
      qspiders: {
        course: {
          JFS: {
            frontend: {
              webtech: ["HTML", "CSS", "JS"],
              libraries: {
                frontEndLib: ["Bootstrap", "MaterialUI"],
                jsLibraries: ["React", "vanillaJs"]
              }
            }
          }
      }
  }
  }
  };

  const {name,study:{college,qspiders:{course:{JFS:{frontend:{webtech:[a,b,c],libraries:{frontEndLib:[d,e],jsLibraries:[f,g]}}}}}}}={...student}

  console.log(g);
