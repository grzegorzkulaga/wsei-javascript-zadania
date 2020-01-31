/*
 <span class="tooltipText">Text tooltipa</span>
 */
document.addEventListener("DOMContentLoaded",function(){
    var tooltipText = document.querySelectorAll("span.tooltip");
    var tooltipTextOne = tooltipText[0];
    var tooltipTextTwo = tooltipText[1];
    var tooltipTextThree = tooltipText[2];
    
    console.log(tooltipTextOne);
    console.log(tooltipTextTwo);
    console.log(tooltipTextThree);
    
    tooltipTextOne.addEventListener("mouseover", mouseoverUl);
    tooltipTextOne.addEventListener("mouseout", mouseoutUl);
    tooltipTextTwo.addEventListener("mouseover", mouseoverUl);
    tooltipTextTwo.addEventListener("mouseout", mouseoutUl);
    tooltipTextThree.addEventListener("mouseover", mouseoverUl);
    tooltipTextThree.addEventListener("mouseout", mouseoutUl);
    
    var div;
    function mouseoverUl(){
            div = document.createElement("div");
            div.className = "tooltipText";
            div.innerHTML = this.dataset.text;
            this.appendChild(div);
    }

    function mouseoutUl(){
        div.remove();
    }
});