import express from "express";
import bodyParser from "body-parser";
import pg from "pg"; 
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";
import bcrypt from "bcrypt"; 
import env from "dotenv"; 

env.config(); 

const app = express();
const port = 3000 ; 
const db = new pg.Client({
    host: "localhost",
    user: "postgres",
    password: process.env.DB_PASSWORD, 
    database: "secrets", 
    port: 5432 
}); 

db.connect(); 

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true})); 
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 
    }
}))
app.use(passport.initialize()); 
app.use(passport.session()); 

app.get("/", (req, res)=>{
    res.render("home.ejs"); 
});
app.get("/login", (req, res)=> res.render("login.ejs")); 
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secrets",
    failureRedirect: "/login" 
})); 
app.get("/secrets", (req, res)=>{
    if(req.isAuthenticated())
        res.render("secrets.ejs");
    else 
        res.send("you are not authinticated"); 
})
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
})
passport.deserializeUser((user, cb)=>{
    cb(null, user);
})


app.listen(port, ()=>{
    console.log(`Server is running on localhost:${port}`);
});

