let smallImage=document.getElementById("smallImage");
let mediumImage=document.getElementById("mediumImage");

let springSmall="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
let winterSmall="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
let autumnSmall="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
let summerSmall="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
let springMedium="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
let winterMedium="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";
let autumnMedium="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";
let summerMedium="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";

function Summer(){
    smallImage.src=summerSmall;
    mediumImage.src=summerMedium;
}
function Winter(){
    smallImage.src=winterSmall;
    mediumImage.src=winterMedium;
}
function Spring(){
    smallImage.src=springSmall;
    mediumImage.src=springMedium;
}
function Autumn(){
    smallImage.src=autumnSmall;
    mediumImage.src=autumnMedium;
}