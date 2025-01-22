import express from "express";
import {dirname} from "path"; 
import {fileURLToPath} from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

var users = [] ; 

const app = express();
const port = 3000;

app.use(logger) ; 
app.use(bodyParser.urlencoded({ extended: false })); 

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


app.get("/" , (req, res)=>{
  res.sendFile(__dirname + "/public/index.html");

});

app.post("/submit", (req, res)=>{
  users.push(req.body) ;
  res.sendFile(__dirname + "/public/ack.html");
  console.log(users); 
}); 



function logger(req, res, next) {
  console.log("request method :" + req.method) ; 
  console.log("request URL : " + req.url) ; 
  next() ;
}