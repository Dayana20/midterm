function endIt() {
    alert("Sorry You're Dead :(");
}

function endIt2() {
    setTimeout(function() { 
        alert("Sorry You're Dead :("); 
        location.href="index.html";
    }, 9000);
    // location.href="index.html";
    
} 

function congrats(){
    alert("You Won! :)"); 
    location.href="index.html";
}