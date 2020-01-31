document.addEventListener("DOMContentLoaded", function (){

    var bodyElement = document.body;
    var galleryElements = document.querySelectorAll(".gallery li img");
    var i;

    for (i = 0; i < galleryElements.length; i++){
        galleryElements[i].addEventListener("click", function (event){
            var newDiv = document.createElement("div");
            newDiv.classList.add("fullScreen");
            var newImg = document.createElement("img");
            newImg.setAttribute("src", "./" + this.getAttribute("src"));
            var newButton = document.createElement("button");
            newButton.classList.add("close");
            newButton.innerText = "Close";

            newDiv.appendChild(newImg);
            newDiv.appendChild(newButton);
            bodyElement.appendChild(newDiv);
            newButton.addEventListener("click", function (event){
                bodyElement.removeChild(newDiv);
            });
        });
    }
}); 