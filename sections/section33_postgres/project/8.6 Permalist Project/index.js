import express from "express";
import bodyParser from "body-parser";
import pg from "pg"; 

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    port: "5432", 
    password:"Acer31415161",
    database: "permalist" 
}); 

db.connect();

let items = [] ; 
let currentId = 0 ; 

db.query("SELECT * FROM items", (err, res)=>{
  if (err)
    console.error("could not fetch items from database");
  else 
    items = res.rows; 
    currentId = res.rows.length ; 
}); 


app.get("/", (req, res) => {
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  db.query(`INSERT INTO items (title)
    VALUES ($1);`, [item]) ; 
  items.push({ title: item, id: currentId++});
  res.redirect("/");
});

app.post("/edit", (req, res) => {
  console.log(req.body) ; 
  
});

app.post("/delete", (req, res) => {
  const deletedItemId = req.body.deleteItemId ; 
  const deletedItem = items.find((item)=> item.id == deletedItemId); 
  removeItemOnce(items, deletedItem); 
  db.query("DELETE FROM items where id = $1", [deletedItemId]); 
  res.redirect("/") ; 
});

function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
