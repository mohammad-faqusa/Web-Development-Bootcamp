import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

var mainData = {title: "Enter your name ", fName: "" , lName : "", nameLength : 0  }

app.get("/", (req, res) => {
  
  res.locals = mainData; 
  res.render("index.ejs") ; 
  mainData['fName'] = "" ; 
  mainData['lName'] = "" ;
  mainData['nameLength'] = 0 ;  


});

app.post("/submit", (req, res) => {
  mainData = {
    ...mainData, 
    ...req.body
  }
  res.locals = mainData; 
  mainData['nameLength'] = calculateLength(mainData.fName, mainData.lName) ; 
  res.redirect("/") ; 

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

function calculateLength(fName , lName) {
  return (fName+lName).length ; 
}
