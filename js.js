var myInd = 0;
var imgGridStartingIndex = 0;
var landh1 = document.querySelector(".landing h1");
var bottomPaintTitle = document.querySelector("#bottomPaintTitle");
var paint = document.querySelector(".paint");
var pBottomBorder = document.querySelector(".bottomPaint p");
var landingLive = document.querySelector(".landingLive");
var middleNav = document.querySelectorAll(".middle ul li a")
var currentTarget = document.querySelector("#selected");
var socialNav = document.querySelector(".social ul");
var phoneNumber = document.querySelector(".phoneNumber");
var landingHeight = document.querySelector(".landing");
var imgGridDiv = document.querySelectorAll(".imgGrid div");

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

window.onscroll = function(){
    if(window.pageYOffset > landingHeight.scrollHeight){
        socialNav.setAttribute(
            "style", "display: none"
        )
        phoneNumber.setAttribute(
            "style", "display: none"
        )
    }else{
        socialNav.removeAttribute(
            "style", "display: none"
        )
        phoneNumber.removeAttribute(
            "style", "display: none"
        ) 
    }
}

middleNav.forEach(function(el){
    el.addEventListener("click", function(){ 
        if(this !== currentTarget){
            currentTarget.removeAttribute("id", "selected");
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


// Testing functionality for ideas
// imgGridDiv.forEach(function(el, ind){
//     el.addEventListener("click", function(){
//         console.log(this, ind);
//         Create an image gallery that opens up when one of these elements is clicked
//         Whichever image is clicked will set the imgGridStartingIndex to this index
//         imgGridStartingIndex = ind;
//         Will be able to cycle through the image gallery, forward and back, by changing the imgGridStartingIndex. 
//     })
// })
