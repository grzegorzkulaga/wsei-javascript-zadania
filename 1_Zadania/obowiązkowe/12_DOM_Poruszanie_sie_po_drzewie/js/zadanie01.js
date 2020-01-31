document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.getElementsByClassName("button");

    for(let i=0; i<buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            const element = this.nextElementSibling;
            if(element !== null) {
                if(element.style.visibility === "hidden")
                    element.style.visibility = "visible";
                else
                    element.style.visibility = "hidden";
            }
        })
    }
})