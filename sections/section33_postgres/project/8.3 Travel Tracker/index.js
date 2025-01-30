import express from "express";
import bodyParser from "body-parser";
import pg from "pg"; 

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    port: "5432", 
    password:"Acer31415161",
    database: "postgres" 
}); 

db.connect() ; 
let total = 0 ; 
let countries = [] ; 
let visitedCountries = new Set()  ; 
let country_codes = [] ; 

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

db.query("SELECT * FROM countries",  (err, res)=>{
  if(err)
    console.error(err);
  else
    countries =  res.rows; 
    countries.forEach(country => country_codes.push(country.country_code)); 

});

db.query("SELECT * FROM visited_countries",  (err, res)=>{
  if(err)
    console.error(err);
  else
  
    res.rows.forEach(visited_country => visitedCountries.add(visited_country.country_code)); 

});

app.get("/", async (req, res) => {
  //Write your code here.
  res.locals.country_codes = [...visitedCountries];
  res.locals.total = total ;  
  res.render("index.ejs"); 
});

app.post("/add", async(req, res)=>{
  let input = req.body.country ; 
  console.log(input) ;
  let country = ''  ; 
  country = countries.find(country => country.country_name === input);  
  if (country) {
    const is_visited = visitedCountries.has(country.country_code) ;
    if (is_visited) 
      console.log("the country is already visisted");
    else
      db.query(`INSERT INTO visited_countries(country_code)
	    VALUES ($1);`,[country.country_code])
      visitedCountries.add(country.country_code); 
  } else {
    console.log("country not found"); 
  }
  res.redirect("/"); 
  

});

app.listen(port, async () => {
  console.log(`Server running on http://localhost:${port}`);
});
