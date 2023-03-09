// document.querySelector("#headingElement").textContent="4.0 Technologies";
// document.querySelector("#headingElement").style.color="blue";
// https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png
// https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png

function manipulateStyles(){
    console.log("Hi, Shohail");
    document.querySelector("#headingElement").textContent="4.0 Technologies";
    document.querySelector("#headingElement").style.color="blue";


}


function switchOn(){
    document.querySelector("#bulbImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.querySelector("#catImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.querySelector("#switchStatus").textContent="Switched On";
    document.querySelector("#onSwitch").style.backgroundColor="grey";
    document.querySelector("#offSwitch").style.backgroundColor="red";


}
function switchOff(){

    document.querySelector("#bulbImage").src=" https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.querySelector("#catImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    document.querySelector("#switchStatus").textContent="Switched Off";
    document.querySelector("#onSwitch").style.backgroundColor="green";
    document.querySelector("#offSwitch").style.backgroundColor="grey";

}

