let h1Element=document.createElement('h1');
h1Element.textContent="Web Technologies";
// document.body.appendChild(h1Element);
let containerElement=document.getElementById("myContainer");
containerElement.appendChild(h1Element);

let btnElement=document.createElement('button');
btnElement.textContent="Change Heading";

btnElement.onclick=function(){
    h1Element.textContent="4.0 Technologies";
    // h1Element.style.color="blue";
    // h1Element.style.fontFamily="Brush Script MT";
    // h1Element.style.fontSize="40px";
    // h1Element.style.textDecoration="underline";
    h1Element.classList.add("heading");
}
containerElement.appendChild(btnElement);

let removeStyleBtn=document.createElement('button');
removeStyleBtn.textContent="Remove the style";
removeStyleBtn.onclick=function(){
    // h1Element.textContent="Web Technologies";
    h1Element.classList.remove("heading");
}
containerElement.appendChild(removeStyleBtn);

console.log(containerElement);