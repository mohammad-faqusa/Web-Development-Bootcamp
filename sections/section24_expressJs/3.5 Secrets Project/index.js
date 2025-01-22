//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express" ; 
import {dirname} from "path" ; 
import {fileURLToPath} from "url"; 
import bodyParser from "body-parser";
import morgan from "morgan" ; 


var userIsAuthorised = false ; 

const __dirname = dirname(fileURLToPath(import.meta.url)); 

const app = express();
const port = 3000 ; 


app.listen(port, ()=> {
    console.log("the server is running seccessfully") ; 
}); 


app.use(bodyParser.urlencoded({ extended: false })); 
app.use(passwordCheck) ; 

app.use(morgan("tiny"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res)=>{
    console.log(req.body) ; 
    if (userIsAuthorised === true) {
        res.sendFile(__dirname + "/public/secret.html");
        userIsAuthorised = false ; 
    } else {
        // res.send("you are wrong");
        res.redirect("/") ; 
    }
});

function passwordCheck(req, res, next) {
    if ((req.body.password) === "Acer") {
        userIsAuthorised = true ; 
    }
    next() ; 
}