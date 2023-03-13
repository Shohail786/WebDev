//callback is a funcrion that is passed as an argument to the another function
function displayGreeting(displayname){
    console.log("hello");
    displayname();
    console.log("good morning");
}

// displayGreeting(function(){
//     console.log("shohail");
// });
// function displayRahul(){
//     console.log("rahul");
// }

// displayGreeting(displayRahul);

// let displayRam=function(){
//     console.log("Ram");
// }

// displayGreeting(displayRam);

// schedulers are used to schedule the execution of a callback function

let counter=0;
setInterval(function(){
    console.log(counter);
    counter=counter+1;
},1000);