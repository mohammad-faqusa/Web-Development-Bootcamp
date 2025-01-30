import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    port: "5432", 
    password:"Acer31415161",
    database: "postgres" 
}); 

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 1;
let users = [] ; 
db.query(`SELECT * FROM users`, (err, res)=>{
  if (err)
    console.error("could not fetch the data of users from database");
  else {
    users = res.rows ; 
    console.log(users); 
  }
}); 

let countries = [];

async function checkUsers() {
  db.query(`SELECT * FROM users`, (err, res)=>{
    if (err)
      console.error("could not fetch the data of users from database");
    else {
      users = res.rows ; 
    }
  }); 
}
checkUsers() ; 

async function checkVisisted(userId = null ) {
  let result = {} ; 
  if (userId === null) {
    result = await db.query("SELECT country_code FROM visited_countries");
  } else {
    result = await db.query("SELECT country_code FROM visited_countries WHERE user_id = $1" , [userId]);
  }
  
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}



app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: "teal",
  });
});
app.post("/add", async (req, res) => {
  const input = req.body["country"];
  console.log(req.params); 
  console.log(req.body); 
  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    const countryCode = data.country_code;
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code) VALUES ($1)",
        [countryCode]
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});
app.post("/user", async (req, res) => {
  console.log(req.body); 
  console.log(req.params); 

  if (req.body.add) {
    res.render("new.ejs"); 
  } else {
    countries = [] ; 
    const user_id = req.body.user; 
    if (user_id === "tab"){
      res.render("new.ejs") ; 
    } else {
      const userColor = (await db.query('SELECT * FROM users WHERE id = $1', [user_id] )).rows[0].color;
      countries = await checkVisisted(user_id);
      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        users: users,
        color: userColor,
      }); 
    }

  }

});



app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html
  const userName = req.body.name; 
  const userColor = req.body.color; 
  db.query('INSERT INTO users (name, color) values($1, $2);', [userName,userColor]); 
  checkUsers(); 
  res.redirect("/") ; 
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
