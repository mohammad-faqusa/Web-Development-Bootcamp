import express from "express";
import bodyParser from "body-parser";
import pg from "pg"; 

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    port: "5432", 
    password:"Acer31415161",
    database: "secrets" 
}); 

db.connect() ; 

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username; 
  const password = req.body.password;
  try{
    const existedUser = (await db.query("SELECT * FROM users WHERE email = $1", [email])).rows[0];
    if(!existedUser){
        await db.query(`INSERT INTO public.users(
        email, password)
        VALUES ($1, $2);`, [email, password]);
        res.render("secrets.ejs");
    } else {
      res.redirect("/login"); 
    }
    
  } catch(err){
    console.error("cannot insert user email & password to database", err);
    res.send("cannot insert your data in our applicaiton");  
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username; 
  const password = req.body.password; 
  try{
    const user = (await db.query("SELECT * FROM users WHERE email = $1", [email])).rows[0]; 
    if (user) {
      if (user.password == password) 
        res.render("secrets.ejs");
      else 
        res.send("wrong password") ; 

    } else {
      res.send("the email does not exist"); 

    }
  } catch(err){
    console.log(err); 
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
