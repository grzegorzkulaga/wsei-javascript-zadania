document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

     //task 0
    var ex5 = document.querySelector(".ex5 ul").children;

    for(var i=0; i<ex5.length; i++){
        if(i%2==0){
            ex5[i].style.backgroundColor = "green";
        }
        if(i%3==0){
            ex5[i].style.textDecoration = "underline";
        }
        if(i==4){
            ex5[i].classList.add("big");
        }
    }

    //task 1
    var chromeLogo = document.querySelector(".chrome");
    var edgeLogo = document.querySelector(".edge");
    var firefoxLogo = document.querySelector(".firefox");

    chromeLogo.style.backgroundImage = "url('assets/img/chrome.png')";
    chromeLogo.style.width = "100px";

    edgeLogo.style.backgroundImage = "url('assets/img/edge.png')";
    firefoxLogo.style.backgroundImage = "url('assets/img/firefox.png')";

    var chromeLink = document.querySelector(".chrome + a");
    var edgeLink = document.querySelector(".edge + a");
    var firefoxLink = document.querySelector(".firefox + a");

    chromeLink.innerHTML = "Chrome";
    firefoxLink.innerHTML = "Firefox";

    chromeLink.setAttribute("href", "https://www.google.com/intl/pl_pl/chrome/");
    edgeLink.setAttribute("href", "https://www.microsoft.com/pl-pl/windows/microsoft-edge");
    firefoxLink.setAttribute("href","https://www.mozilla.org/pl/firefox/new/");

    //task 2
    var name = document.querySelector(".ex2 #name");
    var color = document.querySelector(".ex2 #fav_color");
    var food = document.querySelector(".ex2 #fav_meal");

    name.innerHTML = "Grzegorz Kułaga";
    color.innerHTML = "Green";
    food.innerHTML = "Pizza";

    //task 3
    var ulEx3 = document.querySelector(".ex3 ul");
    ulEx3.classList.add("menu");

    var liEx3 = document.querySelectorAll(".ex3 li");

    for(var element of liEx3){
        if(element.classList.contains("error")){
            element.classList.remove("error");
        }
        if(!element.classList.contains("menuElement")){
            element.classList.add("menuElement");
        }
    }

    //task 4
    var liEx4 = document.querySelectorAll(".ex4 li");
    for(var i=0; i<liEx4.length;i++){
        liEx4[i].dataset.id=i+1;
    }
    
});