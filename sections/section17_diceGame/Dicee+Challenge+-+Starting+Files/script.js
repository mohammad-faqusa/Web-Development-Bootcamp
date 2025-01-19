// for (var i = 0 ; i < 2 ; i++ ) {
//     document.getElementsByTagName("img")[i].setAttribute("src", "./images/dice6.png")
// }


var count = [] ; 
for (var i = 0 ; i < 2 ; i++ ) {
    var randomNumber = Math.floor(Math.random()*6) + 1; 
    count.push(randomNumber)  ; 
    document.getElementsByTagName("img")[i].setAttribute("src", "./images/dice" + randomNumber + ".png")
}

if (count[0] > count[1]) {
    document.querySelector("h1").innerHTML = "Player 1 Winner" ; 
} else if (count[0] < count[1]){
    document.querySelector("h1").innerHTML = "Player 2 Winner" ; 
} else {
    document.querySelector("h1").innerHTML = "Drawn" ; 
}
