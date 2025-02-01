import express from "express"; 
import bodyParser from "body-parser";
import pg from "pg"; 
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";
import bcrypt, { hash } from "bcrypt"; 

const app = express(); 
const server_port = 3000 ;
const saltRounds = 10;  
const db = new pg.Client({
    user: "postgres", 
    password: "Acer31415161",
    host: "localhost",
    database: "secrets", 
    port: 5432 
}); 

db.connect(); 

app.use(express.static('public')); 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(session({
    secret: "TOPSECRET", 
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60
    }
})); 
app.use(passport.initialize());
app.use(passport.session()); 

app.get("/", (req, res)=>res.render("home.ejs"));
app.get("/register", (req,res)=>res.render("register.ejs"))
app.get("/login", (req,res)=>res.render("login.ejs"))

app.get("/secrets", (req, res)=>{
    if(req.isAuthenticated())
        res.render("secrets.ejs"); 
    else 
        res.redirect("/"); 
}); 

app.post("/register", async (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    try {
        const result = await db.query("SELECT * FROM users WHERE email = $1", [username]); 
        if(result.rows.length === 0) {
            bcrypt.hash(password, saltRounds, (err, hash)=>{
                if (err) {
                    console.log(err); 
                } else {
                    const user =db.query("INSERT INTO users (email, password) VALUES ($1, $2)", [username, hash]); 
                    req.login(user, ()=>{
                        res.redirect("/secrets");
                    })
                }
            }); 
        } else {
            res.redirect("/login"); 
        }

    } catch(err){
        console.log(err); 
    }


});

app.post("/login", passport.authenticate("local", {
    successRedirect: "/secrets",
    failureRedirect: "/login"
}));

passport.use(new Strategy(async function verify(username, password, cb){
    try{
        const result = await db.query("SELECT * FROM users WHERE email = $1", [username]); 
        if(result.rows.length > 0 ) {
            const user = result.rows[0]; 
            const storedPassword = user.password; 
            bcrypt.compare(password, storedPassword, (err, result)=>{
                if(err){
                    return cb(err); 
                } else {
                    if (result)
                        return cb(null, user);
                    else 
                        return cb(null, false); 
                }
            })
        } else {
            res.send("could not find the email"); 
        }
    } catch (err){
        console.log(err); 
    }
}));

passport.serializeUser((user, cb)=>{
    cb(null, user); 
});

passport.deserializeUser((user, cb)=>{
    cb(null, user); 
});

app.listen(server_port, ()=>{
    console.log(`Server is running on localhost:${server_port}`); 
})