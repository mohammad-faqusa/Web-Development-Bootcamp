// var generateName = require("sillyname");

import generateName from "sillyname" ; 
import superheroes from "superheroes" ;

var generated = generateName() ; 

console.log(generated); 



const name = superheroes; 

console.log(name[Math.floor(Math.random()*name.length)]) ; 
