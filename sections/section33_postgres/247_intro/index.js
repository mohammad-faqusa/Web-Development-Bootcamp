import pg from "pg"; 
import fs from "fs" ; 
import {parse} from 'csv-parse';


const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    port: "5432", 
    password:"Acer31415161",
    database: "postgres" 
}); 

db.connect() ; 



const data = []
const filename = "flags"; 

fs.createReadStream(filename + ".csv")
  .pipe(parse({ delimiter: ',' }))
  .on('data', (r) => {
    // console.log(r);
    data.push(r);        
  })
  .on('end', () => {
    console.log(data);
    db.query(`CREATE TABLE ${filename}(
        id SERIAL PRIMARY KEY,
        name VARCHAR(45),
        flag CHAR(45));`, (err , res)=>{
            console.log(res); 
    }); 
    
    data.forEach(element=>{
        db.query(`INSERT INTO ${filename} (name, flag)
        VALUES ($1, $2);`, [ element[1], element[2]]); 
    });
  }); 


// const names = ['mohammad', 'ali', 'khaled' , 'mazen'] ; 

// db.query(`INSERT INTO public.users (name)
// VALUES ('mohammad'), ('ali'), ('kheled'); `, (err , res)=>{
//         console.log(res.rows); 
// }); 

// db.query(`SELECT * FROM users`, (err, res)=>{
//     if(err) {
//         console.error("error connectoin database", err.stack) ;
//     } else {
//         console.log("User data : ", res.rows) ; 
//     }
// }); 

// fs.readFile("capitals.csv", function read(err, data) {
//     if (err) {
//         throw err;
//     }
//     console.log(data + 'my data')
// });