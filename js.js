var myInd = 0;
var landh1 = document.querySelector(".landing h1");
var bottomPaintTitle = document.querySelector("#bottomPaintTitle");
var paint = document.querySelector(".paint");
var pBottomBorder = document.querySelector(".bottomPaint p");
var landingLive = document.querySelector(".landingLive");
var middleNav = document.querySelectorAll(".middle ul li a")
var currentTarget = document.querySelector("#selected");

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

middleNav.forEach(function(el){
    el.addEventListener("click", function(){
        currentTarget.removeAttribute("id", "selected");  
        if(this !== currentTarget){
            this.id = "selected";
            currentTarget = this;
        }  
    })
})

function assignColors(){
    bottomPaintTitle.innerHTML = colors[myInd];
    paint.style.backgroundColor = colors[myInd];
    pBottomBorder.style.borderBottomColor = colors[myInd];
}