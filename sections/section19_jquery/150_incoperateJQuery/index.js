// $("body").css("backgroundColor" , "yellow") ;  


// $(document).ready(function(){
    
//     $("h1").css("color", "red") ; 
//     $("h1").html("<h5>hello my brother<h5>") ; 
// }); 

// $("button")  selecting all buttons on the screen 

// jQuery.addClass


// $.removeClass 

// manipulating text
// $.text("updated text") $

// add event listener to jquery 

$("h1").click(function() {
    console.log("clicked") ; 
}); 

$(document).keypress(function(){
    $("h1").text = "clicked" ; 
});

// $("h1").hide()  ; 
$("h1").slideUp().slideDown().animate({margin : "20%"}) ; 

// jquery effect methods 


