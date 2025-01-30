import {parse} from "csv-parse"; 
import fs from "fs"; 


const data = [] ; 
const filename = "capitals" ; 

fs.createReadStream(filename + ".csv").pipe(parse({delimiter: ','})).on('data', r => data.push(r)).on('end',()=> console.log(data)); 

