document.addEventListener("DOMContentLoaded", function(){
    var box = document.getElementsByClassName("box");

    for (let i = 0; i < box.length; i++) {
        box[i].onclick = function(){
            this.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        }
    }
});