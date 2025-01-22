import express from "express" ; 


const app = express() ; 
const port = 3000 ; 

app.listen(port , ()=>{
    console.log("the server is running succesfully") ; 
});

app.get("/" , (req, res)=>{
    res.send("<h1>Hello World</h>"); 
});

app.post("/register" , (req, res)=>{
    res.sendStatus(201); 
});

app.put("/user/mohammad" , (req, res)=>{
    res.sendStatus(200); 
});

app.patch("/user/mohammad" , (req, res)=>{
    res.sendStatus(200); 
});

app.delete("/user/mohammad" , (req, res)=>{
    res.sendStatus(200); 
});



