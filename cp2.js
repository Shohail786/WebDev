let redlight=document.getElementById("RedLight");
let yellowlight=document.getElementById("YellowLight");
let greenlight=document.getElementById("GreenLight");

function Red(){
    redlight.style.backgroundColor="red";
    greenlight.style.backgroundColor="aliceblue";
    yellowlight.style.backgroundColor="aliceblue";
}
function Yellow(){
    yellowlight.style.backgroundColor="yellow";
    redlight.style.backgroundColor="aliceblue";
    greenlight.style.backgroundColor="aliceblue";
    
}
function Green(){
    greenlight.style.backgroundColor="green";
    yellowlight.style.backgroundColor="aliceblue";
    redlight.style.backgroundColor="aliceblue";
}