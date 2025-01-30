import {parse} from 'csv-parse';
import fs from 'fs'; 

const data = []
const filename = "capitals.csv"; 

fs.createReadStream(filename)
  .pipe(parse({ delimiter: ',' }))
  .on('data', (r) => {
    // console.log(r);
    data.push(r);        
  })
  .on('end', () => {
    console.log(data);

  })
db.query(`INSERT INTO public.users (name)
VALUES ('mohammad'), ('ali'), ('kheled'); `, (err , res)=>{
        console.log(res.rows); 
}); 