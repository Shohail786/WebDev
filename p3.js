let gameResult=document.getElementById("gameResult");
let userInput=document.getElementById("userInput");
let randomNumber=Math.ceil(Math.random()*100);
console.log(randomNumber);
function checkGuess(){
    let guessNumber=parseInt(userInput.value);
    if(guessNumber>randomNumber){
        gameResult.textContent=" Guess Number is too high";
        gameResult.style.backgroundColor="#1e217c";
    }
    else if( guessNumber<randomNumber)
    {
        gameResult.textContent="Guess Number is too low";
        gameResult.style.backgroundColor = "#1e217c";
    }

    else if(guessNumber=== randomNumber){
        gameResult.textContent="Congratulation! you got it";
        gameResult.style.backgroundColor = "green";
    }
    else{
        gameResult.textContent="Enter a valid number";
        gameResult.style.backgroundColor = "#1e217c";
    }
}