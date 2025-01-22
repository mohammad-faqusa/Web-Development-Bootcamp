import express from "express" ; 
import {dirname} from "path" ; 
import {fileURLToPath} from "url" ; 
import bodyParser from "body-parser";

const app = express() ; 
const port = 3000 ; 
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended: false})); 


app.listen(port , ()=>{
    console.log("the server is running") ; 
}); 


app.get("/" , (req,res)=>{
    const date = new Date() ; 
    const day = date.getDay() ; 
    res.render("date.ejs", {today:day}); 
});


app.post("/submit", (req, res)=>{
    res.render("index.ejs", {name:req.body.name}) ; 
})