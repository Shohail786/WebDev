let imageElement=document.getElementById("puppyImage");
let imageSize=document.getElementById("pixel");
let errorMessage=document.getElementById("errorMessage");

let maxImageWidth=300;
let minImageWidth=100;
let originalImageWidth=200;
let maxMessage=" Image is too big ";
let minMessage=" Image is too small ";

imageElement.style.width=originalImageWidth+"px";
imageSize.textContent=originalImageWidth+"px";

function decrease()
{
    if(originalImageWidth<=minImageWidth)
    {
        errorMessage.textContent=minMessage;
    }
    else{
        originalImageWidth=originalImageWidth-5;
        let updateImageWidth=originalImageWidth +"px";
        errorMessage.textContent="";
        imageSize.textContent=updateImageWidth;
        imageElement.style.width=updateImageWidth;

    }

}

function increase()
{
    if(originalImageWidth>=maxImageWidth)
    {
        errorMessage.textContent=maxMessage;
    }
    else{
        originalImageWidth=originalImageWidth+5;
        let updateImageWidth=originalImageWidth +"px";
        errorMessage.textContent="";
        imageSize.textContent=updateImageWidth;
        imageElement.style.width=updateImageWidth;

    }
}