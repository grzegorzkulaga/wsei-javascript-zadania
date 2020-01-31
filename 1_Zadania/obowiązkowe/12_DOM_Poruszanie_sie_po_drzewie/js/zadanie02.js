document.addEventListener("DOMContentLoaded", function(){
    var buttons = document.querySelectorAll("a");
    for (var i=0; i<buttons.length; i++) {
        buttons[i].addEventListener('click', clickButtons);
    }
    function clickButtons(event) {
        this.parentElement.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    }
});