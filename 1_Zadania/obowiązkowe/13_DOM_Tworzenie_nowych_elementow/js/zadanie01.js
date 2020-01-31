document.addEventListener("DOMContentLoaded", function(){
    var ul = document.querySelector("ul");
    var a = document.querySelector("a");
    var counter = 0;
    a.addEventListener('click', click);
    
    function click(){
        li = document.createElement("li");
        li.innerHTML = "W liście: "+(counter+1) + " jest: " + counter + " elementów.";
        counter = counter+1;
        ul.appendChild(li)
    }    
});