function nextSequence() {
    randomNumber = Math.floor(Math.random() * 4) ; 
    return randomNumber; 
};

$(".btn").click(function(evn){
    playButton(evn.target.id); 
});

$(document).keypress(function(evn){
    console.log(evn.key); 
    keyPressed = evn.key ; 
    switch (keyPressed) {
        case 'g' : playButton("green"); 
        break; 
        case 'r' : playButton("red"); 
        break; 
        case 'y' : playButton("yellow"); 
        break; 
        case 'b' : playButton("blue"); 
        break; 
    }
});
function playButton(btnName){
    $("#" + btnName).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var aud = new Audio("./sounds/" + btnName + ".mp3");
    aud.play();
};

function game(){
    var count = 0 ; 
    var lose = false ; 
    while (!lose) {

    }
};
