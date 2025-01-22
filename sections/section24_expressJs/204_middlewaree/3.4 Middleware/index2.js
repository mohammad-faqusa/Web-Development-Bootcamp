import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;



app.use(morgan('tiny'));

app.use(logger) ; 

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


app.post("/submit", (req, res)=> {
  console.log(req.body) ; 
});

function logger(req, res, next) { 
  console.log("Request method : ", req.method );
  next(); // where it should go from the middleware 
}