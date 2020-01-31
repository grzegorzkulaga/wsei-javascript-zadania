document.addEventListener("DOMContentLoaded", function () {
    var prevPicture = document.getElementById("prevPicture");
    var nextPicture = document.getElementById("nextPicture");
    var li = document.querySelectorAll("li");
    var counter = 0;
    console.log(prevPicture);
    console.log(nextPicture);
    console.log(li);
    console.log(counter);

    nextPicture.addEventListener("click", clickMe);
    prevPicture.addEventListener("click", clickprevPicture);
    
    function clickMe(){
        if(counter==5){
            li[counter].className = "";
            counter = 0;
            li[counter].className = "visible";
        }
        else{
            li[counter].className = "";
            counter = counter + 1;
            li[counter].className = "visible";
        }
    }
    
    function clickprevPicture(){
        if(counter==0){
            li[counter].className = "";
            counter = 5;
            li[counter].className = "visible";
        }
        else{
            li[counter].className = "";
            counter = counter - 1;
            li[counter].className = "visible";
        }
    }
});