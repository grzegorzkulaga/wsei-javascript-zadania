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

});