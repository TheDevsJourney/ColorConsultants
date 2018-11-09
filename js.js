var myInd = 0;
var landh1 = document.querySelector(".landing h1");
var bottomPaintTitle = document.querySelector("#bottomPaintTitle");
var paint = document.querySelector(".paint");
var pBottomBorder = document.querySelector(".bottomPaint p");
var landingLive = document.querySelector(".landingLive");
var middleNav = document.querySelectorAll(".middle ul li a")


var colors = [
    "rgb(73, 113, 175)",
    "rgb(156, 106, 119)",
    "rgb(114, 119, 168)",
    "rgb(149, 210, 183)",
    "rgb(214, 170, 169)"
]

assignColors();

window.onload = function(){    
    setInterval(function(){
        if(myInd < 4){
            myInd++;
            assignColors();
        }else{
            myInd = 0;
            assignColors();
        } 
    }, 2000)
}

function assignColors(){
    bottomPaintTitle.innerHTML = colors[myInd];
    paint.style.backgroundColor = colors[myInd];
    pBottomBorder.style.borderBottomColor = colors[myInd];
}













// Note as a reminder.. Think about cycling through random colors using Math.Random, or adding more static colors to cycle through.