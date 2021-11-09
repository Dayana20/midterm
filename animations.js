function endIt() {
    alert("Sorry You're Dead :(");
}

function endIt2() {
    setTimeout(function() { 
        alert("Sorry You're Dead :("); 
        location.href="index.html";
    }, 9000);
    
} 

function congrats(){
    alert("You Won! :)"); 
    location.href="index.html";
}