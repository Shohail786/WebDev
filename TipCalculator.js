let inputElement1=document.getElementById("BillAmount");
let inputElement2=document.getElementById("PercentageTip");

let outputElement1=document.getElementById("TipAmount");
let outputElement2=document.getElementById("Total");

let errorMessageElement=document.getElementById("errorMessage");


function Calculate(){
    
    let amount=inputElement1.value;
    let perctip=inputElement2.value;
    let x=parseInt(inputElement1.value);
    let y=parseInt(inputElement2.value);
    if( amount=== "" || perctip=== "")
    {
        errorMessageElement.textContent="Please Enter a Valid Number";
        outputElement1.value="";
        outputElement2.value="";
    }
    else{
        errorMessageElement.textContent=" Congrats! You got your amount";
    let z=(y/100)*x;
    let total=x+z;
    
    outputElement1.value=z;
    outputElement2.value=total;
    console.log(z);
    }
}
