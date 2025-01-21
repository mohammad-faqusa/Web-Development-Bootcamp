console.log("hello from node!") ; 

const fs = require("fs") ; 

console.log(fs) ; 


fs.writeFile("message.txt", "Hello from NOdeJS!", (err) => {
    if (err) throw err; 
    console.log("Thie file has been saved!") ; 
    
})