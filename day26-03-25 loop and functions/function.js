
var start=parseInt(prompt("give the Starting number"));
var end=parseInt(prompt("give the Ending number"));


// annonymous function

let abc=function(start,end){
    for(let i=start; i<end; i++){
        if(i%2==0){
            console.log(i);
        }
        
    }
}
abc(20,50);


// Named function

function even(start,end){
    for(let i=start; i<end; i++){
        if(i%2==0){
            console.log(i);
        }
        
    }
}
even(20,50);
