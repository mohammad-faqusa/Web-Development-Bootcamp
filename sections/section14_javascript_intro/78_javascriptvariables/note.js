


var myName = "Mohammad" ; 

name_part = myName.slice(0,3) ; 


myName.toUpperCase() ;

// list 

var students = ["Mohammmad" , "Ali" , "Ahamad"] ; 

console.log(students)  ; 

students.push("hasan") ; 

console.log(students) ;

students.push("majdi") ; // alwasy push at the end 


console.log(students) ; 

var output = [] ; 

count = 0 ; 
function fizzBuzz() {
    if(count%3 === 0) { 
        output.push("fifth"); 
        
    }
    else {
        
        output.push(count) ; 
    }
    count++ ; 
    console.log(output) ;
}

fizzBuzz() ; 
fizzBuzz() ; 
fizzBuzz() ; 
fizzBuzz() ; 
fizzBuzz() ; 
fizzBuzz() ; 
