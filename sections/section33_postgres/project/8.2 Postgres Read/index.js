import express from "express";
import bodyParser from "body-parser";
import pg from "pg" ; 

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    port: "5432", 
    password:"Acer31415161",
    database: "postgres" 
}); 

db.connect() ; 
const app = express();
const port = 3000;

let totalCorrect = 0;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentQuestion = {};

// GET home page
app.get("/", (req, res) => {
  totalCorrect = 0;
  nextQuestion().then(()=>res.render("index.ejs", { question: currentQuestion }));
});

// POST a new post
app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;
  if (currentQuestion.name.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
  }

  nextQuestion().then(()=>res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  }));
});

async function nextQuestion() {
  const quiz =  await db.query("SELECT * FROM flags");
  const randomCountry = await quiz.rows[Math.floor(Math.random() * quiz.rows.length)];
  currentQuestion = randomCountry;
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  
});
