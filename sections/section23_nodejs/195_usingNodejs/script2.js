const fs = require("fs"); 

fs.readFile("./message.txt","utf8", (err, data) => {
    console.log(data) ;  
})