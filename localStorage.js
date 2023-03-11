localStorage.setItem("name","shohail");
localStorage.setItem("gender","male");
localStorage.setItem("city","Muzaffarpur");

let name=localStorage.getItem("name");
let gender=localStorage.getItem("gender");
let city=localStorage.getItem("city");

console.log(name);
console.log(gender);
console.log(city);


// convert the js object to json string, and back to the js object
profile={
    "name":"Shohail",
    "age":24
}
let stringifiedProfile=JSON.stringify(profile);
console.log(stringifiedProfile);
console.log(typeof(stringifiedProfile));

let parsedProfile=JSON.parse(stringifiedProfile);
console.log(parsedProfile);
console.log(typeof(parsedProfile));

localStorage.setItem("profily",JSON.stringify(profile));
let getprofile=localStorage.getItem("profily");
let getDetails=JSON.parse(getprofile);
console.log(getDetails);
//end

let saveButton =document.getElementById("saveButton");
let textAreaElement=document.getElementById("message");
saveButton.onclick=function()
{
    let userEnteredText=textAreaElement.value;
    localStorage.setItem("userEnteredText",userEnteredText);
}
let storedUserText=localStorage.getItem("userEnteredText");
if(storedUserText===null)
{
    textAreaElement.value="";
}
else{
textAreaElement.value=storedUserText;
}