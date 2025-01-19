// document.querySelector("button").addEventListener("click", handleClick)
document.querySelector("h1").addEventListener("click" , function () {alert("you can't read !")}) ;  
function handleClick(evt) {
    alert("I got clicked!" + evt.currentTarget.myParam); 
}

var numberOfButtons = document.querySelectorAll(".drum").length ; 

var letters = ['w' , 'a' , 's' , 'd' , 'j' ,'k' , 'l'] ; 

for (var i = 0 ;  i < numberOfButtons ; i++ ) {
    var element = document.querySelectorAll("button")[i]; 
    var musicName = element.getAttribute("val"); 
    element.pressedLetter = letters[i]; 
    element.myParam = musicName ; 
    element.addEventListener("click", play , false) ; 
    element.style.backgroundImage = "url('./images/" + musicName + ".png')" ; 
    // element.innerHTML += "<img src='./images/" + musicName + ".png'>"
    // document.querySelectorAll("button img")[i].style.width = "100px" ; 
    // document.querySelectorAll("button img")[i].style.height = "100px" ;
    element.innerHTML = "<div>" + element.innerHTML + "</div>" ; 

}


function play(evt) {
    console.log(evt.currentTarget.myParam)  ; 
    var audio = new Audio("./sounds/" + evt.currentTarget.myParam +".mp3") ;
    audio.play();
    console.log(evt.currentTarget.pressedLetter); 
    buttonAnimation(evt.currentTarget.pressedLetter) ; 

}

// addEvent(document, "keypress", function (e) {
//     e = e || window.event;
//     // use e.keyCode
//     console.log(e.keyCode) ; 
// });
// var letters = ['w' , 'a' , 's' , 'd' , 'j' ,'k' , 'l'] ; 
document.addEventListener("keydown", function(event) {
    keyPressed = event.key; 
    console.log(typeof(event.key));
    event.currentTarget.pressedLetter = event.key; 
    switch(keyPressed) {
        case 'w' : 
            event.currentTarget.myParam = "crash" ; 
            play(event); 
        break ; 
        case 'a' : 
            event.currentTarget.myParam = "kick" ; 
            play(event); 
        break; 
        case 's' : 
            event.currentTarget.myParam = "snare" ; 
            play(event); 
        break; 
        case 'd' : 
            event.currentTarget.myParam = "tom1" ; 
            play(event); 
        break; 
        case 'j' : 
            event.currentTarget.myParam = "tom2" ; 
            play(event); 
        break; 
        case 'k' : 
            event.currentTarget.myParam = "tom3" ; 
            play(event); 
        break; 
        case 'l' : 
            event.currentTarget.myParam = "tom4" ; 
            play(event); 
        break; 
        default: 
        break; 
    }
  }) ; 

// function addEvent(element, eventName, callback) {
//     if (element.addEventListener) {
//         element.addEventListener(eventName, callback, false);
//     } else if (element.attachEvent) {
//         element.attachEvent("on" + eventName, callback);
//     } else {
//         element["on" + eventName] = callback;
//     }
// }

function buttonAnimation(currentKey) {
    // strkey = "." + currentKey ;
    console.log("here is the pressed key " + currentKey); 
    console.log(typeof(currentKey)) ;
    element = document.querySelector("." + currentKey);
    element.classList.add("pressed");
    console.log("animation for " + element.classList) ; 
    setTimeout(function(){element.classList.remove("pressed");  
    }, 100);
    // delay(100).then(() => {
    //     console.log("This message is delayed by 2 seconds");
    //     element.classList.remove("pressed");  
    //   });
    
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }