import axios from 'axios' ; 

const response = await axios.get("https://catfact.ninja/fact") ; 

console.log(response.data) ; 