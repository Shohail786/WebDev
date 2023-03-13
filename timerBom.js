let userInputElement=document.getElementById("defuser");
let timerElement=document.getElementById("timer");

let counter=10;

let intervalId=setInterval(function(){
    counter=counter-1;
    timerElement.textContent=counter;
    if(counter===0){
        timerElement.textContent="Boom";
        clearInterval(intervalId);
    }
}, 1000);

userInputElement.addEventListener("keydown",function(event){
    let defusetext=userInputElement.value;
    // let defusetext=event.target.value;
    console.log(defusetext);
    if(event.key==="Enter" && defusetext==="defuse" && counter!==0)
    {
        timerElement.textContent="defused successfully";
    }
    clearInterval(intervalId);
});