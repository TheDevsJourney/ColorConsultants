var myInd = 0;
var imgGridStartingIndex = 0;
var landh1 = document.querySelector(".landing h1");
var bottomPaintTitle = document.querySelector("#bottomPaintTitle");
var paint = document.querySelector(".paint");
var pBottomBorder = document.querySelector(".bottomPaint p");
var landingLive = document.querySelector(".landingLive");
var middleNav = document.querySelectorAll(".middle ul li a")
var currentTarget = document.querySelector("#selected");
var socialNav = document.querySelector(".social");
var phoneNumber = document.querySelector(".phoneNumber");
var landing = document.querySelector(".landing");
var imgGridDiv = document.querySelectorAll(".imgGrid div");

var middle = document.querySelector(".middle");
var middleTitle = document.querySelector(".middle h1");
var middleUI = document.querySelector(".middle ul");
var middleP = document.querySelector(".middle p");
var mainNav = document.querySelector(".mainNav");
var mainCont = document.querySelector(".cont");

var services = document.querySelector(".services");
var pastProjects = document.querySelector(".pastProjects");
var contact = document.querySelector(".contact");

var mobileBreathe = document.querySelector(".mobileBreathe");

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
    if(window.pageYOffset > landing.scrollHeight){
        assignNavStyles();
    }else{
        removeNavStyles();
    }
    
    // Check to see where user is on page and assign nav ID to corresponding section
    if(window.pageYOffset + mainNav.scrollHeight + 50> contact.offsetTop){
        loopNav(3);
    }else if(window.pageYOffset + mainNav.scrollHeight + 200 > pastProjects.offsetTop){
        loopNav(2);
    }else if(window.pageYOffset + mainNav.scrollHeight + 50 > services.offsetTop){
        loopNav(1);
    }else{       
        loopNav(0);
    }

}

// Click event to see which nav link was clicked, assign that link the current target and remove current target from any other existing nav link.
middleNav.forEach(function(el){
    el.addEventListener("click", function(){ 
        if(this !== currentTarget){
            currentTarget.removeAttribute("id", "selected");
            this.id = "selected";
            currentTarget = this;
        }  
    })
})

function loopNav(num){
    currentTarget.removeAttribute("id", "selected");
    middleNav[num].setAttribute("id", "selected");
    currentTarget = middleNav[num];
}

function assignColors(){
    bottomPaintTitle.innerHTML = colors[myInd];
    paint.style.backgroundColor = colors[myInd];
    pBottomBorder.style.borderBottomColor = colors[myInd];
    mobileBreathe.style.color = colors[myInd];
}

function assignNavStyles(){
    socialNav.classList.add("removeNavElements");
    phoneNumber.classList.add("removeNavElements");
    middleP.classList.add("removeNavElements");
    middle.setAttribute(
        "style", "width: 90%"
    )
    middleTitle.setAttribute(
        "style", "margin-bottom: 15px;"
    )
    middleUI.setAttribute(
        "style", "margin-top: 8px; width: 60%;"
    )
    mainNav.setAttribute(
        "style", "min-height: 15vh;"
    )
    mainCont.setAttribute(
        "style", "min-height: 15vh;"
    )
}

function removeNavStyles(){
    socialNav.classList.remove("removeNavElements");
    phoneNumber.classList.remove("removeNavElements");
    middleP.classList.remove("removeNavElements");
    middle.removeAttribute(
        "style", "width: 90%"
    )
    middleTitle.removeAttribute(
        "style", "margin-bottom: 15px;"
    )
    middleUI.removeAttribute(
        "style", "margin-top: 8px; width: 60%;"
    )
    mainNav.removeAttribute(
        "style", "min-height: 15vh;"
    )
    mainCont.removeAttribute(
        "style", "min-height: 15vh;"
    ) 
}

// Testing functionality for ideas
imgGridDiv.forEach(function(el, ind){
    el.addEventListener("click", function(){
        console.log(this, ind);
        // Create an image gallery that opens up when one of these elements is clicked
        // Whichever image is clicked will set the imgGridStartingIndex to this index
        // imgGridStartingIndex = ind;
        // Will be able to cycle through the image gallery, forward and back, by changing the imgGridStartingIndex. 
    })
})