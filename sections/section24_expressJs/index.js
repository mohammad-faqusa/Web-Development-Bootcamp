import express from "express" ; 

const app = express() ; 
const port = 3000 ; 

app.listen(port , () => {
    console.log(`Server running on port ${port} .`) ; 
});

app.get("/", (req, res) => {
    // console.log(req) ; 

    res.send("<h1>Hi</h1>") ; 
});

app.get("/about" , (req, res) => {
    res.send("<h1>About Me</h2>") ;
});

app.post("/register", (req, res) => {
    res.sendStatus(201); 
});

app.put("/user/mohammad", (req, res) => {
    res.sendStatus(200) ; 
}); 

app.patch("/user/mohammad", (req, res) => {
    res.sendStatus(200) ; 
}); 

app.delete("/user/mohammad", (req, res) => {
    res.sendStatus(200) ; 
}); 

/*
request vocap 
    GET 
        request resource
    POST 
        sending resource 
    PUT 
        replace resource (replace the whole resource)
    PATCH 
        patch up resource (replace a part of resource )
        put and patch are update methods

    DELETE  
        delete resource 
    

HTTP response : 
    informational responses : 100 - 199 
    seccessful responses : 200 - 299 
    redirection messages 300 - 399 
    client error responses 400 - 499 
    server error response 500 - 599 
*/